/// <reference path="./plugin.d.ts" />

export class TemplatePlugin implements MPPlugin {
  sayHello() {
    console.log("Hello, World!");
  }

  getHello() {
    return "Hello, World!"; 
  }
}

export class TemplatePluginEvent implements MPPluginEvent {
  private intervalHandler: any;

  listen(params: any, eventSink: (data: string) => void) {
    this.intervalHandler = setInterval(() => {
      eventSink?.(JSON.stringify({ lon: 123.0, lat: 321.0 }));
    }, 5000);
  }

  close() {
    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
      this.intervalHandler = undefined;
    }
  }
}

pluginRegisterer.registerPlugin(
  "com.mpflutter.template_plugin",
  new TemplatePlugin()
);
pluginRegisterer.registerPlugin(
  "com.mpflutter.template_plugin_event",
  new TemplatePluginEvent()
);
