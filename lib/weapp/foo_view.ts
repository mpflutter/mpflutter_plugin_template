export class FooView extends MPPlatformView {
  elementType(): string {
    return "foo";
  }

  setAttributes(attributes: any): void {
    super.setAttributes(attributes);
    this.htmlElement.setAttribute("text", attributes.text);
  }
}
