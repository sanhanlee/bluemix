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
var chat_service_1 = require("./chat.service");
var chatObj_1 = require("./chatObj");
var ChatComponent = (function () {
    function ChatComponent(chatservice) {
        this.chatservice = chatservice;
        this.chat = [];
        this.chatti = [];
        this.context = {};
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent.prototype.textAlert = function (msg) {
        var _this = this;
        var ch = new chatObj_1.chatObj(msg, "...");
        // this.chatti.push(ch);
        // this.chat.push(msg);
        this.chatservice.getReply(msg, this.context).subscribe(function (ans) {
            // ch.ans=ans["Hello"];
            ch.ans = ans.output.text[0];
            _this.context = ans.context;
            _this.chatti.push(ch);
        });
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    core_1.Component({
        selector: 'chat',
        templateUrl: './chat.component.html',
        providers: [chat_service_1.ChatService],
        styleUrls: ['./chat.component.css']
    }),
    __metadata("design:paramtypes", [chat_service_1.ChatService])
], ChatComponent);
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map