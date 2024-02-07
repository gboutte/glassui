import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {HIGHLIGHT_OPTIONS} from "ngx-highlightjs";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
