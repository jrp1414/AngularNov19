import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
  // pure:false
})
export class FilterPipe implements PipeTransform {

  transform(list: any, parameterName:string,filterText:string): any {
    let filteredList = [];
    list.forEach(temp => {
      if (temp[parameterName].toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) != -1) {
        filteredList.push(temp);
      }
    });
    return filteredList;
  }
}
