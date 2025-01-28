import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    if (!value) return '0 Min.';
    
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    let formattedDuration = '';
    if (hours > 0) {
      formattedDuration += `${hours} Hr. `;
    }
    if (minutes > 0) {
      formattedDuration += `${minutes} Min.`;
    }

    return formattedDuration.trim();
  }
}
