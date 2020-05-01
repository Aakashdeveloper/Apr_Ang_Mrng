import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent {
   title: string  = 'My Ang App';
   description: string = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero';
   showImage: boolean = true;
   userSearch;
   restaurants: any[] = [
    {
        id : '6360',
        name : 'Gulab',
        city : 'Delhi',
        locality_verbose : 'Pitampura, New Delhi',
        thumb : 'https://b.zmtcdn.com/data/pictures/chains/3/6303/640252389ddc3f264dd0e9f2741e73cd.jpg',
        aggregate_rating : '4.2',
        rating_text : 'Very Good',
        min_price: '230'
    },
    {
        id : '307406',
        name : 'Pandit Ji Parantha Hut',
        locality : 'Ashok Vihar Phase 2',
        city : 'Delhi',
        thumb : 'https://b.zmtcdn.com/data/pictures/5/19295175/231f0337cd9140f230d8208ddde923c9.jpg',
        aggregate_rating : '4.0',
        rating_text : 'Very Good',
        min_price: '530'
    },
    {
        id : '2008',
        name : 'Hira Sweets',
        locality : 'Laxmi Nagar',
        city : 'Delhi',
        thumb : 'https://b.zmtcdn.com/data/reviews_photos/15b/d3faa48ac6382d15d60ca96b501dc15b_1570259732.jpg',
        aggregate_rating : '4.0',
        rating_text : 'Very Good',
        min_price: '450'
    }
  ];

  toggleImage(): void{
    this.showImage = !this.showImage;

  }
}
