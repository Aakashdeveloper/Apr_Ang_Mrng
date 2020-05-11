import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { IProduct } from './hotel.model';
import { HotelsService } from './hotels.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit, OnChanges, OnDestroy {
   title: string  = 'My Ang App';
   description: string = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero';
   showImage: boolean = true;
   userSearch;
   discountPrice = Math.floor(Math.random() * (50 - 10)) + 10;
   message = this.discountPrice > 25 ? 'Super Lucky' : 'Lucky';
   restaurants: IProduct[] = [];

   constructor(public hotelsService: HotelsService){
       console.log('In Side Constructors');
   }

   ngOnInit(){
    console.log('In Side ngOnInit');
    this.hotelsService.getHotels()
        .subscribe((data) => this.restaurants = data);
   }

   ngOnChanges(){
    console.log('In Side ngOnChanges');
   }

   ngOnDestory(){
    console.log('In Side ngOnDestory');
   }


  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  dataRecive(message: string): void {
      this.description = message;
  }
}



/*
ngOnInit(){
    console.log('In Side ngOnInit');
    this.restaurants = this.hotelsService.getHotels();
   }
*/
