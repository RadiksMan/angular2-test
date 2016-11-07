import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'doublepipe'
})
export class DoublepipePipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return value * 2;
    }

}
