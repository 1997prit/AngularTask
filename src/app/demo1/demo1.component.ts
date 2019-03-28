import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  ans:number=0;
  constructor() { }

  ngOnInit() {
  }

  sub(num1,num2){
    this.ans=parseInt(num1)-parseInt(num2);
  }



}
