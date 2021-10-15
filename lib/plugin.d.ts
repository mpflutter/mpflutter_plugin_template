declare interface MPEnv {
  platformType: number; // browser = 1, wxMiniProgram = 2, swanMiniProgram = 3.
  platformScope: string;
  platformAppInstance: any;
  platformGlobal: () => any;
}

declare class MPPluginRegisterer {
  env: MPEnv;
  registerPlugin(name: string, target: MPPlugin): void;
}

declare interface MPPlugin {}

declare interface MPPluginEvent {
  listen(params: any, eventSink: (data: string) => void);
  close();
}

declare var pluginRegisterer: MPPluginRegisterer;
