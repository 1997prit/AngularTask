import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { productClass } from "./productClass";
import { PARAMETERS } from "@angular/core/src/util/decorators";
import { EMPTY_ARRAY } from "@angular/core/src/view";

@Component({
  selector: "app-product-component",
  templateUrl: "./product-component.component.html",
  styleUrls: ["./product-component.component.css"]
})
export class ProductComponentComponent implements OnInit {
  @ViewChild("demo") input1: ElementRef;
  emparr: productClass[] = [
    new productClass(101, "Prit", 50000, "Permanent"),
    new productClass(102, "Rajesh", 60000, "Temparory")
  ];
  constructor() {}
  str: string = "productList";

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("inside the afterview init" + this.input1.nativeElement);
  }

  ngOnInit() {
    console.log("inside the oninit");
  }
  onClick() {
    console.log(this.input1.nativeElement.value);
  }

  onAdd(id, name, salary, designation) {
    this.emparr.push(new productClass(id, name, salary, designation));
  }

  onDelete(item) {
    this.emparr.splice(this.emparr.indexOf(item), 1);
  }
  onUpdate(item) {
    if (item.emp_designation == "Temparory") {
      item.emp_designation = "Permanent";
    }
  }
  temparr: productClass[] = this.emparr;

  onSearch(parameters) {
    if (parameters != "") {
      this.emparr = this.emparr.filter(e1 =>
        e1.emp_name.startsWith(parameters)
      );
    } else {
      this.emparr = this.temparr;
    }
  }

  onDemo(search) {
    if (search != "") {
      this.emparr = this.emparr.filter(e1 =>
        e1.emp_name.startsWith(search)
      );
    } else {
      this.emparr = this.temparr;
    }
  }
}
