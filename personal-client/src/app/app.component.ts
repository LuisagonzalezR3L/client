import { Component, ViewContainerRef} from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'Personal';

  constructor( 
    public http: Http,
    public toastr: ToastsManager,
    private translate: TranslateService,
    vRef: ViewContainerRef
  ){
  	this.toastr.setRootViewContainerRef(vRef);
    translate.addLangs(['es']);
    translate.setDefaultLang('es');
    translate.use('es');
  }


}
