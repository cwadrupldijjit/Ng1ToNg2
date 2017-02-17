"use strict";
var app_module_1 = require("./app/app.module");
var static_1 = require("@angular/upgrade/static");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (platformRef) {
    var upgrade = platformRef.injector.get(static_1.UpgradeModule);
    upgrade.bootstrap(document.body, ['testApp']);
});
