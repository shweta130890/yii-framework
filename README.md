# user api with yii2 <sup>basic</sup>

#### Web apps with Yii 2 Rest API.. 

Built with * [Yii2](http://www.yiiframework.com/) 

## Prerequisite Technologies

* [Git](https://git-scm.com/downloads)  
* MySql

## Installation

Clone the repository from Github.
```
git clone https://github.com/shweta130890/yii-framework.git
cd yii-framework
composer update 
```

## APIs with sample payloads
### GET(api/users/index) 
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

### POST(api/users/login) 
 ```json
    { 
        "username": "shweta/shweta@mailinator.com", 
        "password": "123456" 
    } 
```

### POST(api/users/signup) 
 ```json
    { 
        "username": "shweta2",
        "email": "shweta2@mailinator.com",
        "password": "123456"
    } 
    
 ```
    
### PUT(api/users/update?id=1) 
 ```json
    { 
        "id": 2,
        "username": "test",
        "email": "test@gmail.com",
        "fullname": "",
        "password": "$2y$13$QHpmTWzZI3SGI45km.IFR.iAeYyeFF/WTWGijxF6JzGZxDN1CgDoa",
        "role": 1,
        "status": 1,
        "created_at": "2019-07-09 18:53:01",
        "updated_at": "2019-07-11 06:43:50",
        "last_login": "2019-07-09 20:36:11"
    }  
 ```
