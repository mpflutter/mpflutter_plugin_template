declare interface MPEnv {
  platformType: number; // browser = 1, wxMiniProgram = 2, swanMiniProgram = 3.
  platformScope: string;
  platformAppInstance: any;
  platformGlobal: () => any;
}

declare class MPPluginRegisterer {
  env: MPEnv;
  registerPlugin(name: string, target: MPPlugin): void;
  registerPlatformView(name: string, target: typeof MPPlatformView): void;
}

declare interface MPPlugin {}

declare interface MPPluginEvent {
  listen(params: any, eventSink: (data: string) => void);
  close();
}

declare class MPPlatformView {
  elementType(): string;
  onMethodCall(method: string, params: any): Promise<any>;
  invokeMethod(method: string, params: any, requireResult: boolean = false): Promise<any> | undefined;
}

declare var pluginRegisterer: MPPluginRegisterer;
