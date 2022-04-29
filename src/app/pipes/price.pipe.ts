import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(price: number): number {
    if(price){
     price =  Number((price / 100).toFixed(2))
    }
    return price;
  }

}
