import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; //appModule ün konumu import edilmiş
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//uygulamanın bir tarayıcıda çalışacağını ve 
//başlangıçta da appModule ü çalıştıracağınıo söylediğimiz kısım 
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
