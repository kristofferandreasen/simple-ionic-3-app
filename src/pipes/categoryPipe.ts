import {Pipe} from '@angular/core';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipe {
  transform(value, args) {
    return value;
  }
}
