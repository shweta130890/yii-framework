import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import { UserService } from '../../models/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    public _loginForm: FormGroup;
    public _formErrors: any;
    public _submitted = false;
    public _errorMessage = '';

    constructor(private _userService: UserService,
                private _router: Router,
                private _formBuilder: FormBuilder) {

        this._loginForm = _formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        });
        this._loginForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

    }

    private _setFormErrors(errorFields: any): void {
        for (const key in errorFields) {
            // skip loop if the property is from prototype
            if (!errorFields.hasOwnProperty(key)) {
                continue;
            }

            const message = errorFields[key];
            this._formErrors[key].valid = false;
            this._formErrors[key].message = message;
        }
    }

    private _resetFormErrors(): void {
        this._formErrors = {
            username: {valid: true, message: ''},
            password: {valid: true, message: ''},
        };
    }

    public _isValid(field): boolean {
        let isValid = false;

        // If the field is not touched and invalid, it is considered as initial loaded form. Thus set as true
        if (this._loginForm.controls[field].touched === false) {
            isValid = true;
            // If the field is touched and valid value, then it is considered as valid.
        } else if (this._loginForm.controls[field].touched === true && this._loginForm.controls[field].valid === true) {
            isValid = true;
        }
        return isValid;
    }

    public onValueChanged(data?: any) {
        if (!this._loginForm) { return; }
        const form = this._loginForm;
        for (const field in this._formErrors) {
            if (this._formErrors.hasOwnProperty(field)) {
                // clear previous error message (if any)
                const control = form.get(field);
                if (control && control.dirty) {
                    this._formErrors[field].valid = true;
                    this._formErrors[field].message = '';
                }
            }
        }
    }

    ngOnInit() {
        this._resetFormErrors();
        this._userService.logout();
    }

    public onSubmit(elementValues: any) {
        this._submitted = true;
        this._userService.login(elementValues.username, elementValues.password)
            .subscribe(
                result => {
                    if (result.success) {
                        this._router.navigate(['/']);
                    } else {
                        this._errorMessage = 'Email or password is incorrect.';
                        this._submitted = false;
                    }
                },
                error => {
                    this._submitted = false;
                    // Validation error
                    if (error.status === 422) {
                        this._resetFormErrors();
                        const errorFields = JSON.parse(error.data.message);
                        this._setFormErrors(errorFields);
                    } else {
                        this._errorMessage = error.data;
                    }
                }
            );
    }
}
