import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  increamentingNumber! :any ;
  oddNumbers:number[] = [];
  evenNumbers:number[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  onIntervalFired(event: Event) {
    this.increamentingNumber = event;
    if(this.increamentingNumber % 2 === 0){
      this.evenNumbers.push(this.increamentingNumber);
    }else{
      this.oddNumbers.push(this.increamentingNumber);
    }
  }
}
