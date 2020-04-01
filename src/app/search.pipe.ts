import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;
    var srcStr = args.toLowerCase();

    var retArr = [];
    value.forEach(e => {
      if(e.User.toLowerCase().includes(srcStr)) {
        retArr.push(e);
      }
    });
    return retArr;
    
    // return value.filter((item) => {
    //     return JSON.stringify(item).toLowerCase().includes(srcStr);
    // });
  }

}