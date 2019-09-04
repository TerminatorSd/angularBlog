# AngularBlog => Try to know more things about angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

### Cmds used to use
```
npm install
ng serve
ng build
ng g m module-name
ng g c component-name
ng g directive|pipe|service|class|guard|interface|enum|module
```

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Something Interesting
Angular regards module as a whole, so if you put all components in you apps in the declarations of app.module.ts, you can use any of them in any of your components, because they already know each other in app.module.