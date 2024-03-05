# MapperX Test Case - Angular Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

1. Navigate to the project directory (test-app) and run `npm install` to install necessary packages for the project.

2. Create your own Firebase project in [firebase console](https://console.firebase.google.com) and enable `Email/Password` sign-in authentication method.

3. For security concerns, the `environments` folder is added on `.gitginore` file. Run `ng g environments` to create `environments` folder and add your Firebase configuration inside `environment.development.ts` file as below:

```typescript
import { FirebaseOptions } from "@angular/fire/app";

export const environment: { firebase: FirebaseOptions } = {
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  }
}
```

4. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

5. Run `ng deploy` for deploying your application to production. (For more information, visit [docs](https://angular.io/cli/deploy).)

## Live Demo
Visit this website for live demo: https://mapperx-test-case.web.app/

## Pages

### GitHub Sponsors Card 
View original page [here](https://github.com/#:~:text=out%20pull%20requests-,GitHub,-Sponsors%20lets%20you)

![github-sponsors-card-gif](https://github.com/snnehir/MapperXTestCase/blob/master/readme-images/github-sponsors-card.gif)

Smaller screen view:

![card-comparison-img](https://github.com/snnehir/MapperXTestCase/blob/master/readme-images/card-comparison.png)


### Login
![login-img](https://github.com/snnehir/MapperXTestCase/blob/master/readme-images/login.jpg)


### Sign Up
![signu-up-img](https://github.com/snnehir/MapperXTestCase/blob/master/readme-images/sign-up.jpg)

### Sign Up Validations
![sign-up-validations-img](https://github.com/snnehir/MapperXTestCase/blob/master/readme-images/sign-up-validations.jpg)

## Notes
In `app.routes.ts` file, `/protected` route is configured such that unauthorized users cannot view the page. For visiting the [protected page](https://mapperx-test-case.web.app/protected), user must be logged in. 
For demo purposes, you can use this account to login:  
- email: snnehir21@gmail.com
- password: Abc123
