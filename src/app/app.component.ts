import { Component } from '@angular/core';
import { IServerElement } from './server-element.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servers';
  serverElements: IServerElement[] = [  
    {
      name: "header",
      type: "server",
      content: "Welcome to my website"
    },
    {
      name: "image",
      type: "server",
      content: "https://example.com/image.jpg"
    },
    {
      name: "paragraph",
      type: "blueprint",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      name: "paragraph",
      type: "",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }
  onBlurprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }
}
