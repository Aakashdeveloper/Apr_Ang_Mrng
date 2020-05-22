import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
    templateUrl: './survery.component.html'
})


export class SurveryComponent implements OnInit{
    surveyForm: FormGroup;
    constructor(private fb: FormBuilder) {}

    ngOnInit(){
        this.surveyForm = this.fb.group({
            firstName: ['Garry', [Validators.required, Validators.minLength(3)]],
            email: ['a@a.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$')]]
        });
    }

    save(): void {

    }
}
