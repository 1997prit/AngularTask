import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  num1:number=0;
  num2:number=0;
  ans:number=0;

  constructor() { }

  ngOnInit() {
  }
  Add(){
    this.ans=this.num1+this.num2;
  }
}
