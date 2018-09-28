import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { httpFactory } from "./http/http.factory";
import { AppRoutingModule } from './app.route.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './shared/material/material.module';
import { BootstrapModule } from './shared/bootstrap/bootstrap.module';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BootstrapModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [{
		  provide: Http,
		  useFactory: httpFactory,
		  deps: [XHRBackend, RequestOptions]
		}
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
