import { Component, Input, OnInit } from '@angular/core';
import { IServerElement } from '../server-element.interface';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: IServerElement = {
    name: "",
    type: "",
    content: ""
  }
  constructor() { }

  ngOnInit(): void {
  }

}
