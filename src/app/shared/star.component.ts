import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']
})

export class StarComponent implements OnChanges {
    
    STAR_WIDTH: number = 95;


    @Input() rating: number;
    
    starWidth: number = 105;
    @Output() ratingClicked: EventEmitter<string>=new EventEmitter<string>();

    /**
     *
     */
    constructor() {
        this.starWidth = (this.rating * this.STAR_WIDTH)/5;  
    }
    ngOnChanges(): void {
       this.starWidth = (this.rating * this.STAR_WIDTH)/5; 
    }

    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} has been clicked`);
    }

}