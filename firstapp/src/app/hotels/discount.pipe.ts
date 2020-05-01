import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'discount'
})


export class DiscountPipe implements PipeTransform{
    transform(value: number): number {
        value = value - 10;
        return value;
    }
}
