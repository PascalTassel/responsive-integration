import { Pipe, PipeTransform } from '@angular/core';
import { IOrders, IFilters } from '../models';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(value: IOrders[], filters?: IFilters): IOrders[] {
    return value
      .filter(v => {
        if(filters?.buyer) {
          return v.orderBuyer === filters.buyer;
        }
        return true;
      })
      .filter(v => {
        if(filters?.status) {
          return v.orderStatus === filters?.status;
        }
        return true;
      })
      .filter(v => {
        if(filters?.search) {
          return v.orderNumber.includes(filters.search)
        }
        return true;
      })
  }

}
