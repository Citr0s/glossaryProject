import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
if (process.env.NODE_ENV === 'production') {
  enableProdMode();
}

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
