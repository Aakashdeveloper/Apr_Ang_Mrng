import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()

export class OrderService {
    private HotelUrl = 'http://localhost:8900/restaurants';
    constructor(private http: HttpClient) {}


    getHotelDetails(id): Observable<any[]>{
        return this.http.get<any[]>(`${this.HotelUrl}?id=${id}`);
    }
}
