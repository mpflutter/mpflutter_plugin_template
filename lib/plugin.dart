import 'package:flutter/services.dart';

class TemplatePlugin {
  static MethodChannel methodChannel =
      MethodChannel('com.mpflutter.template_plugin');
  static EventChannel eventChannel =
      EventChannel('com.mpflutter.template_plugin_event');

  static sayHello() {
    methodChannel.invokeMethod('sayHello');
  }

  static Future<String> getHello() async {
    final text = await methodChannel.invokeMethod('getHello');
    print('The text = ' + text);
    return text;
  }

  static installEventListener() {
    eventChannel.receiveBroadcastStream({"a": "b"}).listen((event) {
      print(event);
    });
  }
}
