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

(window || global).TemplatePlugin = new TemplatePlugin();
