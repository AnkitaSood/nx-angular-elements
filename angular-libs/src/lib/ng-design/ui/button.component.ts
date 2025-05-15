import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-button',
  template: `<p>button works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {}
