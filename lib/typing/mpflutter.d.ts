declare interface MPEnv {
  platformType: number; // unknown = 0, browser = 1, wxMiniProgram = 2, swanMiniProgram = 3.
  platformScope: any;
  platformAppInstance: any;
  platformGlobal: () => any;
}

declare class MPPluginRegisterer {
  env: MPEnv;
  registerPlugin(name: string, instance: MPPlugin): void;
  registerPlatformView(name: string, viewClas: typeof MPPlatformView): void;
}

declare interface MPPlugin {}

declare interface MPPluginWithEventChannel {
  listen(params: any, eventSink: (data: string) => void);
  close();
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
