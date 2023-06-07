import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IServerElement } from '../server-element.interface';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: IServerElement = {
    name: "",
    type: "",
    content: ""
  }
  constructor() {
    console.log('constructor: called()');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: called() ');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: called()');
  }

}
