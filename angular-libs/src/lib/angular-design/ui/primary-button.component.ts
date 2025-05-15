import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  template: `<button>{{label}}</button>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrimaryButtonComponent {
  label = input<string>('Button label');
}
