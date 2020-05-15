import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable()

export class OrderService {
    data;
    private HotelUrl = 'http://localhost:8900/restaurants';
    private orderUrl = 'http://localhost:8900/orders';
    constructor(private http: HttpClient) {}


    getHotelDetails(id): Observable<any[]>{
        return this.http.get<any[]>(`${this.HotelUrl}?id=${id}`);
    }

    placeOrder(user, price, rname): Observable<any[]> {

        this.data = {
            "id": user.orderId,
            "firstname": user.firstname,
            "email": user.email,
            "address": user.address,
            "phone": user.phone,
            "price": price,
            "rname": rname
        };

        return this.http.post<any[]>(this.orderUrl, this.data);



    }
}


