import { bootstrapApplication } from '@angular/platform-browser';
import { ButtonComponent } from './lib/ng-design/ui/button.component';
import { inject } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { GreetingInAngularComponent } from './lib/ng-design/ui/greetings.component';

bootstrapApplication(ButtonComponent).then((app) => {
  const injector = inject(app.injector.constructor);
  const buttonElement = createCustomElement(ButtonComponent, {injector});
  customElements.define('angular-button', buttonElement);
});
bootstrapApplication(GreetingInAngularComponent).then((app) => {
  const injector = inject(app.injector.constructor);
  const greetingsElement = createCustomElement(GreetingInAngularComponent, {injector});
  customElements.define('angular-greetings', greetingsElement);
});
