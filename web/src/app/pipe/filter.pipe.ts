import { Pipe, PipeTransform } from '@angular/core';
import { json } from '../component/post/result/json';

@Pipe({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {

  transform(items: json[], filter: json): json[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: json) => this.applyFilter(item, filter));
  }

  applyFilter(book: json, filter: json): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (typeof book[field] === 'string') {
            if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
              return false;
            }
          }
          else return false;
        } else if (typeof filter[field] === 'number') {
          if (book[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
