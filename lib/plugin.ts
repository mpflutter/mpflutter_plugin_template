declare var window: any;
declare var global: any;

export class TemplatePlugin {
  sayHello() {
    console.log("Hello, World!");
  }

  getHello() {
    return "Hello, World!";
  }
}

export class TemplatePluginEvent {
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

(window || global).TemplatePlugin = new TemplatePlugin();
(window || global).TemplatePluginEvent = new TemplatePluginEvent();
