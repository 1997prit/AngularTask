import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
  @Input() title:string="hello";
  @Output() demo=new EventEmitter();
  ngOnInit() {
  }
  onKeyUp(search){
    this.demo.emit(search);
  }
  onSearch(search){
    this.demo.emit(search);


  }

}
