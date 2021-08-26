import 'package:flutter/services.dart';

class TemplatePlugin {
  static MethodChannel methodChannel = MethodChannel('TemplatePlugin');

  static sayHello() {
    methodChannel.invokeMethod('sayHello');
  }

  static Future<String> getHello() async {
    final text = await methodChannel.invokeMethod('getHello');
    print('The text = ' + text);
    return text;
  }
}
