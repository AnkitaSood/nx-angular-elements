import { bootstrapApplication } from '@angular/platform-browser';
import { PrimaryButtonComponent } from './lib/angular-design/ui/primary-button.component';
import { inject } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { GreetingInAngularComponent } from './lib/angular-design/ui/greetings.component';

bootstrapApplication(PrimaryButtonComponent).then((app) => {
  const injector = inject(app.injector.constructor);
  const buttonElement = createCustomElement(PrimaryButtonComponent, {injector});
  customElements.define('angular-button', buttonElement);
});
bootstrapApplication(GreetingInAngularComponent).then((app) => {
  const injector = inject(app.injector.constructor);
  const greetingsElement = createCustomElement(GreetingInAngularComponent, {injector});
  customElements.define('angular-greetings', greetingsElement);
});
