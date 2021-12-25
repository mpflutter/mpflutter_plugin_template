let React = window.React;
let ReactDOM = window.ReactDOM;

interface FooProps {
  text?: string;
}

class Foo extends React.Component<FooProps> {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "yellow",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.props.text}
      </div>
    );
  }
}

export class FooView extends MPPlatformView {
  constructor(readonly document: Document, readonly initialAttributes?: any) {
    super(document, initialAttributes);
    ReactDOM.render(<Foo />, this.htmlElement);
  }

  setChildren(children: any): void {}

  setAttributes(attributes: any): void {
    super.setAttributes(attributes);
    ReactDOM.render(<Foo text={attributes.text} />, this.htmlElement);
  }
}
