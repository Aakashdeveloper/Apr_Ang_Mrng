import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelsService } from './hotels.service';

@Component({
    templateUrl: './hotel-details.component.html'
})

export class HotelDetailsComponent implements OnInit {
    id: number;
    details: any[];

    constructor(private route: ActivatedRoute,
                private hotelsService: HotelsService) {

    }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
        this.hotelsService.getHotelDetails(this.id)
            .subscribe((data) => this.details = data);
    }

}


/*
city: string;
    name: string;

this.route.queryParams
            .subscribe((data) => {
                this.name = data['name'];
                this.city = data['city']
            });

*/