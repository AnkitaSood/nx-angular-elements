export class GreetingElement extends HTMLElement {
  public static observedAttributes = ['title'];

  attributeChangedCallback() {
    this.innerHTML = `<h1>Welcome to ${this.title}!!!!</h1>`;
  }
}

customElements.define('simple-greeting-comp', GreetingElement);
