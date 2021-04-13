import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenPipe',
})
export class ShortenPipePipe implements PipeTransform {
  transform(value: string): string {
    if (value.length <= 17) {
      return value;
    }
    return value.substring(0, 14) + '...';
  }
}
