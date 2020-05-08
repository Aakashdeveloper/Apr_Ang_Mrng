import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IProduct } from './hotel.model';
import { Observable} from 'rxjs';

@Injectable()

export class HotelsService {
    private HotelUrl = 'http://localhost:8900/restaurants';
    constructor(private http: HttpClient) {}

    getHotels(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.HotelUrl);
    }
}




/*
  getHotels(){
        return [
          {
              "id" : "123334",
              "name" : "Captain Sam's",
              "locality" : "Sector 70",
              "city" : "Chandigarh",
              "thumb" : "https://b.zmtcdn.com/data/reviews_photos/c7a/634a2c0def8a8d044992aea9e7680c7a_1556257724.jpg",
              "aggregate_rating" : 2.9,
              "min_price": 670,
              "rating_text" : "Good"
          }
          ];
    }
*/
