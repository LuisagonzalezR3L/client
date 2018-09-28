import {Injectable} from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../../environments/environment";

@Injectable()
export class InterceptorHttp extends Http {

    constructor(
      backend: ConnectionBackend, 
      defaultOptions: RequestOptions
    ){
      super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
      return super.request(url, options);
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
      url = this.updateUrl(url);
      return super.get(url, this.getRequestOptionArgs(options, url));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      url = this.updateUrl(url);
      return super.post(url, body, this.getRequestOptionArgs(options, url));
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
      url = this.updateUrl(url);
      return super.put(url, body, this.getRequestOptionArgs(options, url));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
      url = this.updateUrl(url);
      return super.delete(url, this.getRequestOptionArgs(options, url));
    }

    private updateUrl(req: string) {
      return  environment.api + "/" + environment.apiPath + "/" + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs, url?:string) : RequestOptionsArgs {
      
      let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

      if (options == null) {
        options = new RequestOptions();
      }
      if (options.headers == null) {
        options.headers = new Headers();
        options.headers.append('Content-Type', 'application/json');
      }

      if(currentUser.token){
        options.headers.append("Authorization", "Bearer " + currentUser.token)
      }

      return options;
    }
}
