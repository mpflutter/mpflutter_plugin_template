import 'package:flutter/services.dart';
import 'package:mpcore/mpcore.dart';

class TemplatePlugin {
  static MethodChannel methodChannel = MethodChannel(
    'com.mpflutter.templateMethodChannel',
  );

  static EventChannel eventChannel = EventChannel(
    'com.mpflutter.template_plugin_event',
  );

  static Future<String> getDeivceName() async {
    final text = await methodChannel.invokeMethod('getDeviceName');
    return text;
  }
}

class TemplateFooView extends MPPlatformView {
  final String? text;

  TemplateFooView({
    this.text,
  }) : super(
          viewType: 'com.mpflutter.templateFooView',
          viewAttributes: {'text': text},
        );
}
