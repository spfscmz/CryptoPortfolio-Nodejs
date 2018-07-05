# API Documentation


[Register](#register)  
[Register with email verification](#register-with-email-verification)  
[Login](#login)  
[Public](#public)  
[Private](#private)  
[Post Setting](#post-setting)  
[Get Setting](#get-setting)  
[Post Profile](#post-profile)  
[Get Profile](#get-profile)  
[Update Profile](#update-profile)  
[Clear Profile](#clear-profile)  
[Administration](#administration)  
[Administration Registration](#administration-register)  
[Administrator List Users](#administration-list-users)  
[Administrator Send Email to All Users](#administration-send-email-to-all-users)  
[Authorization Logic](#authorization-logic)  
[Issues](#issues) 





---

* # Register

    *Request*
    `POST /register`
    
    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    username     | string        | Required            | length 6-30, no space
    email        | string        | Required            | your email 
    password     | string        | Required            | your password
    firstname    | string        | Required            | your first name
    lastname     | string        | Required            | your last name
    public       | string        | Optional, true by defualt| If you willing to share you profile
    
    *Response*
```json
    {
        "user": {
            "email": "your email",
            "password": "your password",
            "firstname": "your first name",
            "lastname": "your last name",
            "public": "ture/false",
            "administrator": "true/false",
            "createAt": "some date",
            "upedateAt": "soome date"
        },
        "token": "xxx"
    }
```

```json
    {
        "error": "Some error message"
    }
```

---

* # Register with email verification

    *Request*
    `POST /verify/register`  
    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    username     | string        | Required            | length 6-30, no space
    email        | string        | Required            | your email 
    password     | string        | Required            | length 8-20, must have upper, lower case and digits, no space
    firstname    | string        | Required            | your first name
    lastname     | string        | Required            | your last name
    public       | string        | Optional, true by defualt| If you willing to share you profile

    *Response*

```json
    {
        "success": "true",
        "message": "We sent a link to your email, please check your email and activate your account"
    }
```

```json
    {
        "error": "Some error message"
    }
```

---

* # login

    *Request*
    `POST /login`
    
    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    email/email  | string        | Required            | your email or username
    password     | string        | Required            | your password


```json
    {
        "user": {
            "email": "your email",
            "password": "your password",
            "firstname": "your first name",
            "lastname": "your last name",
            "public": "ture/false",
            "administrator": "true/false",
            "createAt": "some date",
            "upedateAt": "soome date"
        },
        "token": "xxx"
    }
```

```json
    {
        "error": "Error message showing that why it didn't login successfully"
    }
```

---

* # Public

	*Purpose:* Set your account to public

    *Request*
    `GET /user/public`
    
    header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token

    *Response*
```json
    welcome API
```

```json
    {
        "error": "reason why your request failed"
    }
```

---

* # Private

	*Purpose:* Set your account to private

    *Request*
    `GET /user/private`
    
    header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token

    *Response*
```json
    welcome API
```

```json
    {
        "error": "reason why your request failed"
    }
```

---

* # Post Setting

	*Request*
    `POST /user/setting`
    
	header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token
    
    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    email        | string        | Required            | your email 
    password     | string        | Required            | your password
    firstname    | string        | Required            | your first name
    lastname     | string        | Required            | your last name
    public       | string        | Optional, true by defualt| If you willing |
    
	*Response*
	
    
```json
    {
        "email": "your email",
        "password": "your password",
        "firstname": "your first name",
        "lastname": "your last name",
        "public": "ture/false",
        "administrator": "true/false",
        "createAt": "some date",
        "upedateAt": "soome date"
    }
```

```json
    {
        "error": "reason why your request failed"
    }
```



---

* # Get Setting

	*Request*
    `GET /user/setting`

   header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token
    
    
   *Response*

```json
    {
        "email": "your email",
        "password": "your password",
        "firstname": "your first name",
        "lastname": "your last name",
        "public": "ture/false",
        "administrator": "true/false",
        "createAt": "some date",
        "upedateAt": "soome date"
    }
```
```json
    {
        "error": "reason why your request failed"
    }
```

---

* # Post Profile

	*Request*
    	`POST /user/profile`

    header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token

    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    email        | String        | Optional            | Your contact email
    github       | String        | Optional            | Your github account
    interest     | String        | Optional            | Your interest areas
    investment   | String        | Optional            | Your current investment


   *Response*

```json
    {
        "email": "your email",
        "github": "your github account",
        "interest": "your interest areas",
        "investment": "req.body.investment",
        "createAt": "some date",
        "upedateAt": "soome date"
    }
```
```json
    {
        "error": "reason why your request failed"
    }
```

---

* # Get Profile

	*Request*
  	  `GET /user/profile`

    header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token

    
   *Response*

```json
    {
        "email": "your email",
        "github": "your github account",
        "interest": "your interest areas",
        "investment": "req.body.investment",
        "createAt": "some date",
        "upedateAt": "soome date"
    }
```

```json
    {
        "error": "reason why your request failed"
    }
```

---

* # Update Profile

	*Request*
    	`PUT /user/profile`

    header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token

    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    email        | String        | Optional            | Your contact email
    github       | String        | Optional            | Your github account
    interest     | String        | Optional            | Your interest areas
    investment   | String        | Optional            | Your current investment


   *Response*

```json
    {
        "email": "your email",
        "github": "your github account",
        "interest": "your interest areas",
        "investment": "req.body.investment",
        "createAt": "some date",
        "upedateAt": "soome date"
    }
```
```json
    {
        "error": "reason why your request failed"
    }
```

---

* # Clear Profile

	*Request*
    	`GET /user/profile/clear`

    header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token

    
   *Response*

```json
    {
        "email": "",
        "github": "",
        "interest": "",
        "investment": "",
        "createAt": "some date",
        "upedateAt": "soome date"
    }
```
```json
    {
        "error": "reason why your request failed"
    }
```

---

* # Administration:
    This feature is for setting up adminstrator and website management.

---

* # Administrator Registration:

    *Request*
        `POST /adminregister`

    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    email        | string        | Optional            | your email 
    password     | string        | Optional            | your password
    firstname    | string        | Optional            | your first name
    lastname     | string        | Optional            | your last name
    public       | string        | Optional            | If you willing to share you profile

    
   *Response*

```json 
    {
        "user": {
            "email": "your email",
            "password": "your password",
            "firstname": "your first name",
            "lastname": "your last name",
            "public": "ture/false",
            "administrator": "true",
            "createAt": "some date",
            "upedateAt": "soome date"
        },
        
        "token": "xxx"
    }
```
```json
    {
        "error": "reason why your request failed"
    }
```

---

* # Administrator List Users:

    list all the users in database 

    *Request*
        `GET /administrator/list`
        
    header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token

     *Response*

```json 
    [
        {
            "email": "your email",
            "password": "your password",
            "firstname": "your first name",
            "lastname": "your last name",
            "public": "ture/false",
            "administrator": "true",
            "createAt": "some date",
            "upedateAt": "soome date"
        },
        {
            
        }, 
        
    ]
```

```json 
    {
        "error": "error messages"
    }
```

* # Administrator Send Email to All Users:
    *Request*
        `POST /administrator/sendall`
        
    header       | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    authorization| jwt token     | Required            | Your jwt token

    Parameters   | Data Type     | Required / Optional | Description
    ------------ | ------------- | ------------------- | -----------
    subject      | string        | Optional            | subject
    message      | string        | Optional            | message
    html         | string        | Optional            | html included in email
    


---

* # Authorization Logic:

    * Every route start with baseURL/user/ will check the token sent by client, and 
      server will recognize the token and know which user you are. If you update your
      email or username or password, the token will expire.

---

* # Issues:
   * `We are currently using gmail for sending email, which could cause problems when it comes to sending bulk emails.`      