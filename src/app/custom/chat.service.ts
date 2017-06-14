import { Injectable } from '@angular/core';
import { Http,RequestOptions,Jsonp,Headers,URLSearchParams } from '@angular/http'
import {Observable} from 'rxjs/Observable'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ChatService {
    
    constructor(private http:Http, private jsonp:Jsonp) { }

    // getReply():Promise<any>{
    //     //call the http request to fetch the data ok
    //     return this.http.get("https://jsonplaceholder.typicode.com/photos")
    //         .toPromise()
    //         .then(response=>response.json());
    // }

    // getReply(msg:string):Observable<any>{
    //      let options = new RequestOptions({
    //       // Have to make a URLSearchParams with a query string
    //       params: {"que":msg} // <-----
    //   });
    //     return this.http.get("https://conversation-middleman.mybluemix.net/hello-json",options)
    //         .map(response => response.json());

    // }


    getReply(msg:string,context:any):Observable<any>{
        // let usp = new URLSearchParams();
        // usp.append('username', "81f237da-6c34-4292-ab5c-9e3c1124a5c9");
        // usp.append('password', "fPiqLy8H5OpD");

        let s:Headers=new Headers({
            "Content-Type":"application/json;charset=utf-8",
            "postman-token":"3a9134d6-0214-dd5d-ed05-44bc2e8cb734",
            "cache-control": "no-cache",
            "Access-Control-Allow-Origin": "*"
        });

        let body:any={
            "input": {
                "text": msg
            },
            context:context
        }

        let options = new RequestOptions({
            headers:s,
            withCredentials : true
        });

        // let url:string="https://gateway.watsonplatform.net/conversation/api/v1/workspaces/69be9663-1d18-4fe2-aeb8-c85ced73dccc/message/?version=2017-05-10";
        let url:string="https://gateway.watsonplatform.net/conversation/api/v1/workspaces/65b85e98-d39f-42a8-b6af-a11d81d95236/message/?version=2017-05-10";

        let data =  this.http.post(url,JSON.stringify(body), {headers:s, withCredentials : true})
            .map(response => response.json());
        return data;

    }
}

// {
//   "url": "https://gateway.watsonplatform.net/conversation/api",
//   "username": "81f237da-6c34-4292-ab5c-9e3c1124a5c9",
//   "password": "fPiqLy8H5OpD"
// }
// 10.88.33.43
// "c:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-agent="Android" --user-data-dir="C:/temp-chrome-eng
