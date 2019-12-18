import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceChar'
})
export class ReplaceCharPipe implements PipeTransform {

  transform(value: string, replace:string,replaceWith:string): any {
    return value.replace(replace,replaceWith);
  }

}
