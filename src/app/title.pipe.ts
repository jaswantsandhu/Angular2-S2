import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value.length > 35)
      {
          return value.substring(0, 31) + "...";
      }
    return value;
  }

}
