export class Foo {
  constructor(readonly htmlElement: HTMLElement) {}

  setAttributes(attributes: any) {
    if (attributes.opacity) {
      this.htmlElement.style.opacity = `${attributes.opacity}`;
    }
  }
}
