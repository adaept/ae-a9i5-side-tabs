import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target config
// needed for adding aeicons component
import { applyPolyfills, defineCustomElements } from '@adaept/ae-icons-component/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// needed for adding aeicons component
applyPolyfills().then(() => {
  defineCustomElements(window);
});
