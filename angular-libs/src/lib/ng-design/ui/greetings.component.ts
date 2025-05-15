import { Component, input } from '@angular/core';

@Component({
  template: `
    <h1>Welcome to {{title()}}!</h1>
  `
})
export class GreetingInAngularComponent {
  title = input<string>();
}
