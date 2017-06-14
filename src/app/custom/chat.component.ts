import { Component, OnInit } from '@angular/core';

import { ChatService } from './chat.service'
import { chatObj } from './chatObj'

@Component({
    selector: 'chat',
    templateUrl: './chat.component.html',
    providers:[ChatService],
    styleUrls:['./chat.component.css']
})

export class ChatComponent implements OnInit {
    chat:string[]=[];
    chatti:chatObj[]=[];
    context:any={};
    constructor(private chatservice:ChatService) { }

    ngOnInit() { 

    }

    textAlert(msg:string){
        let ch = new chatObj(msg, "...");
        // this.chatti.push(ch);
        // this.chat.push(msg);

        this.chatservice.getReply(msg,this.context).subscribe(ans=>{
            // ch.ans=ans["Hello"];
            ch.ans=ans.output.text[0];
            this.context=ans.context;
            this.chatti.push(ch);
        })
    }
}