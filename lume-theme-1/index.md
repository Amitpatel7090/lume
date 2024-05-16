---
title: "docs 1"
nav_order: 1
---

<div id="tabs">
  <a href="api.md">API</a> |
  <a href="example.md">Example</a>
</div>

# Welcome to Interface Documentation
![Staytuned](../assets/staytuned.jpg)
# gretting function in ts

```ts
/**
 * Generates a greeting message for a given name.
 * @param name The name of the person to greet.
 * @returns A greeting message.
 */
function greet(name: string): string {
    return `Hello, ${name}! Welcome to our program.`;
}
```

```ts
class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.handleClick);
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.handleClick);
  }

  handleClick() {
    // Handle button click event
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Add your button styles here */
      </style>
      <button>
        Hello, Click me!
      </button>
    `;
  }
}

customElements.define('button-component', ButtonComponent);

```