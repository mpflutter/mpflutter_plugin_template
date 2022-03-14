export class FooView extends MPPlatformView {
  eventListened = false;

  elementType(): string {
    return "foo";
  }

  setChildren(children: any): void {}

  setAttributes(attributes: any): void {
    super.setAttributes(attributes);
    this.htmlElement.setAttribute("text", attributes.text);
    if (!this.eventListened) {
      this.eventListened = true;
      this.htmlElement.addEventListener("mockClick", (event) => {
        this.invokeMethod("mockclick", { value: "ttt" });
      });
    }
  }
}
