declare class MPPluginRegisterer {
  registerChannel(
    name: string,
    instance: typeof MPMethodChannel | typeof MPEventChannel
  ): void;
  registerPlatformView(name: string, viewClass: typeof MPPlatformView): void;
}

declare class MPMethodChannel {
  onMethodCall(method: string, params: any): Promise<any> | any;
  invokeMethod<T>(method: string, params: any): Promise<T> | T;
}

declare class MPEventChannel {
  onListen(params: any, eventSink: (data: string) => void);
  onCancel(params: any);
}

declare interface MPConstraints {
  x: number;
  y: number;
  w: number;
  h: number;
}

declare class MPComponentView {
  readonly document: Document;
  readonly initialAttributes: any;
  htmlElement: HTMLElement;
  superview?: MPComponentView;
  subviews: MPComponentView[] = [];
  readonly hashCode!: number;
  readonly attributes: any;
  readonly constraints?: MPConstraints;
  readonly disposed: boolean;
  constructor(readonly document: Document, readonly initialAttributes?: any);
  dispose(): void;
  elementType(): string;
  setConstraints(constraints?: MPConstraints): void;
  setAttributes(attributes: any): void;
  setChildren(children: any): void;
  removeAllSubviews(): void;
  removeFromSuperview(): void;
  addSubview(view: MPComponentView): void;
  didMoveToWindow(): void;
}

declare class MPPlatformView extends MPComponentView {
  onMethodCall(method: string, params: any): Promise<any> | any;
  invokeMethod(
    method: string,
    params: any,
    requireResult: boolean = false
  ): Promise<any> | any;
}

declare var pluginRegisterer: MPPluginRegisterer;
