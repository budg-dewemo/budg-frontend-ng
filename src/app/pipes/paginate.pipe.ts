import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: any[], page_size: number | string, page_number: number): any[] {

    // If array is empty or undefined, return it
    if (!array.length) return [];

    // If page size is all, return entire array
    if (page_size === 'all') {
      return array;
    }

    //In case page size and number are not set
    page_size = page_size || 5;
    page_number = page_number || 1;
    --page_number; // because pages logically start with 1, but technically with 0

    return array.slice(page_number * +page_size, (page_number + 1) * +page_size);
  }

}
