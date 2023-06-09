import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // two way data binding
  // newServerName: string = '';
  // newServerContent: string = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput!: ElementRef;

  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    // console.log(serverNameInput.value);
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }
  onAddBlurprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

}
