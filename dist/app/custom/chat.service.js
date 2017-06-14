"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var ChatService = (function () {
    function ChatService(http, jsonp) {
        this.http = http;
        this.jsonp = jsonp;
    }
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
    ChatService.prototype.getReply = function (msg, context) {
        // let usp = new URLSearchParams();
        // usp.append('username', "81f237da-6c34-4292-ab5c-9e3c1124a5c9");
        // usp.append('password', "fPiqLy8H5OpD");
        var s = new http_1.Headers({
            "Content-Type": "application/json;charset=utf-8",
            "postman-token": "3a9134d6-0214-dd5d-ed05-44bc2e8cb734",
            "cache-control": "no-cache",
            "Access-Control-Allow-Origin": "*"
        });
        var body = {
            "input": {
                "text": msg
            },
            context: context
        };
        var options = new http_1.RequestOptions({
            headers: s,
            withCredentials: true
        });
        // let url:string="https://gateway.watsonplatform.net/conversation/api/v1/workspaces/69be9663-1d18-4fe2-aeb8-c85ced73dccc/message/?version=2017-05-10";
        var url = "https://gateway.watsonplatform.net/conversation/api/v1/workspaces/65b85e98-d39f-42a8-b6af-a11d81d95236/message/?version=2017-05-10";
        var data = this.http.post(url, JSON.stringify(body), { headers: s, withCredentials: true })
            .map(function (response) { return response.json(); });
        return data;
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, http_1.Jsonp])
], ChatService);
exports.ChatService = ChatService;
// {
//   "url": "https://gateway.watsonplatform.net/conversation/api",
//   "username": "81f237da-6c34-4292-ab5c-9e3c1124a5c9",
//   "password": "fPiqLy8H5OpD"
// }
// 10.88.33.43
// "c:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --user-agent="Android" --user-data-dir="C:/temp-chrome-eng
//# sourceMappingURL=chat.service.js.map