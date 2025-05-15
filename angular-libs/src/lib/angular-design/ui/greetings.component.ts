import { Component, input } from '@angular/core';

@Component({
  template: `
    <h1>Greetings from {{title()}}!</h1>
  `
})
export class GreetingInAngularComponent {
  title = input<string>('Angular');
}
