import { Injectable } from '@angular/core';

import {Http, Response, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class HttpService {

  constructor(private http:Http) { }

    getData(){
        return this.http.get('https://auth-e7135.firebaseio.com/Title.json')
          .map( (response: Response) => response.json() );
    }

    sendData(user: any){
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append("Content-Type","applictation/json");
        return this.http.post('https://auth-e7135.firebaseio.com/data.json', body, {
            headers: headers
        }).map( (data: Response) => data.json()
            .catch(this.handlError)
            );
    }

    getOwnData(){
        return this.http.get('https://auth-e7135.firebaseio.com/data.json')
            .map( (response: Response) => response.json() );
    }

    private handlError(error: any){
        console.log(error);
        return Observable.throw(error.json());
    }
}
