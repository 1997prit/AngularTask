import { Component, OnInit } from '@angular/core';
import {Arrdemo} from '../arrdemo';
@Component({
  selector: 'app-arrdemo',
  templateUrl: './arrdemo.component.html',
  styleUrls: ['./arrdemo.component.css']
})

export class ArrdemoComponent implements OnInit {
  Id:string;
  Title:String;
  Status:String;

  constructor() { }
  
  ngOnInit() {
  }

  arr:Arrdemo[]=[
    new Arrdemo('1','Learn angular','Starting'),
    new Arrdemo('2','Learn angular','Starting'),
    new Arrdemo('3','Learn angular','Starting')    
  ];
  
  onDelete(item:Arrdemo){
    this.arr.splice(this.arr.indexOf(item),1);
  }

  onAdd(){
    this.arr.push(new Arrdemo(this.Id,this.Title,this.Status));
  }

}
