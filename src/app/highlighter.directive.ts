import { Directive, Input, HostBinding, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective {

  public backgroundcolor:string;
  @Input() defaultcolor:string;
  @Input() highlightcolor:string;
  constructor() {
    this.backgroundcolor = this.defaultcolor;
   }

   @HostListener('mouseenter') mouseover(){
     this.backgroundcolor=this.highlightcolor;
   }
   @HostListener('mouseleave') mouseleave(){
     this.backgroundcolor=this.defaultcolor;
   }

   @HostBinding('style.backgroundColor') get setColor(){
     return this.backgroundcolor;
   }

}
