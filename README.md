# user api yii2 and ng5 <sup>basic</sup>

#### Web apps with Yii 2 Rest API and Angular 5 frontend..

A basic starter package to help developing MEAN stack application faster.

Built with the following technologies...

* [Yii2](http://www.yiiframework.com/)
* [Angular5](https://angular.io)

## Prerequisite Technologies

* [Git](https://git-scm.com/downloads) 
* [Node](https://nodejs.org/en/download/)
* MySql

## Installation

Clone the repository from Github.
```
git clone https://github.com/shweta130890/yii-framework.git
cd yii-framework
composer update
npm install  
npm start
```

## APIs with sample payloads
### GET(api/user/all) 
 ```json
[
    {
        "id": 1,
        "username": "shweta",
        "email": "shweta@mailinator.com",
        "password": "123456",
        "isActive": false,
        "role": 1
    },
    {
        "id": 2,
        "username": "shweta1",
        "email": "shweta1@mailinator.com",
        "password": "123456",
        "isActive": true,
        "role": 1
    },
    {
        "id": 3,
        "username": "shweta2",
        "email": "shweta2@mailinator.com",
        "password": "123456",
        "isActive": true,
        "role": 10
    }
]
```

### POST(api/user/login) 
 ```json
  { 
        "username": "shweta/shweta@mailinator.com", 
        "password": "123456" 
    } 
```

### POST(api/user/signup) 
 ```json
  { 
        "username": "shweta2",
        "email": "shweta2@mailinator.com",
        "password": "123456"
    } 
    
 ```
    
### PUT(api/user/update?id=1) 
 ```json
  { 
        "isActive": true,
    }  
 ```
