/// <reference path="../typing/mpflutter.d.ts" />

declare let wx: any;

import { FooView } from "./foo_view";

export class TemplateMethodChannel extends MPMethodChannel {
  async onMethodCall(method: string, params: any): Promise<any> {
    if (method === "getDeviceName") {
      const caller = await this.invokeMethod("getCallerName", {});
      return `${caller} on ${wx.getSystemInfoSync().model}`;
    } else {
      throw new Error("Method not implemented.");
    }
  }
}

export class TemplateEventChannel extends MPEventChannel {
  private intervalHandler: any;

  onListen(params: any, eventSink: (data: string) => void) {
    this.intervalHandler = setInterval(() => {
      eventSink(new Date().toISOString());
    }, 1000);
  }

  onCancel(params: any) {
    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
      this.intervalHandler = undefined;
    }
  }
}

pluginRegisterer.registerChannel(
  "com.mpflutter.templateMethodChannel",
  TemplateMethodChannel
);

pluginRegisterer.registerChannel(
  "com.mpflutter.templateEventChannel",
  TemplateEventChannel
);

pluginRegisterer.registerPlatformView("com.mpflutter.templateFooView", FooView);
