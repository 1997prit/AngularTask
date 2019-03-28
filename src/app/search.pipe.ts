import { Pipe, PipeTransform } from '@angular/core';
import { productClass } from './product-component/productClass';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: productClass[], args:string): any {
    return arr.filter(e1=>e1.emp_name.startsWith(args));
  }

}
