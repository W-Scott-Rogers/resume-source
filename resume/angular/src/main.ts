import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {ResumeModule} from "./app";

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(ResumeModule)
    .catch(err => console.error(err));

