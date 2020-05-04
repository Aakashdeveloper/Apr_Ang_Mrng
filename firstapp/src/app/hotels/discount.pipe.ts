import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'discount'
})


export class DiscountPipe implements PipeTransform{
    transform(value: number, userinput: number): number {
        value = value - userinput;
        return value;
    }
}
