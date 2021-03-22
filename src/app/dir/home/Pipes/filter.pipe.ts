import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, search: string): any{
    if(search === undefined){
      return value
    }else{
      return value.filter((el)=>{
        return el.username.toLowerCase().includes(search.toLowerCase())
      });
    }

  }

}
