import {AppModule} from './app/app.module';
import { UpgradeModule } from '@angular/upgrade/static';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['testApp'], {strictDi: true});
});