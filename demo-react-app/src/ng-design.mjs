import { bootstrapApplication } from '@angular/platform-browser';
import * as i0 from '@angular/core';
import { ChangeDetectionStrategy, Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';

class ButtonComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.10", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.10", type: ButtonComponent, isStandalone: true, selector: "lib-button", ngImport: i0, template: `<p>button works!</p>`, isInline: true, styles: [":host{display:block}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.10", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', imports: [CommonModule], template: `<p>button works!</p>`, changeDetection: ChangeDetectionStrategy.OnPush, styles: [":host{display:block}\n"] }]
        }] });

class GreetingInAngularComponent {
    title = input();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.10", ngImport: i0, type: GreetingInAngularComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.2.10", type: GreetingInAngularComponent, isStandalone: true, selector: "ng-component", inputs: { title: { classPropertyName: "title", publicName: "title", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: `
    <h1>Welcome to {{title()}}!</h1>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.10", ngImport: i0, type: GreetingInAngularComponent, decorators: [{
            type: Component,
            args: [{
                    template: `
    <h1>Welcome to {{title()}}!</h1>
  `
                }]
        }] });

bootstrapApplication(ButtonComponent).then((app) => {
    const injector = inject(app.injector.constructor);
    const buttonElement = createCustomElement(ButtonComponent, { injector });
    customElements.define('angular-button', buttonElement);
});
bootstrapApplication(GreetingInAngularComponent).then((app) => {
    const injector = inject(app.injector.constructor);
    const greetingsElement = createCustomElement(GreetingInAngularComponent, { injector });
    customElements.define('angular-greetings', greetingsElement);
});

/**
 * Generated bundle index. Do not edit.
 */
//# sourceMappingURL=ng-design.mjs.map
