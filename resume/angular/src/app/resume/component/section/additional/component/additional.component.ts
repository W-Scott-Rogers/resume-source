import {Component, Input, OnInit} from "@angular/core";
import {AdditionalModel} from "../model/additional.model";

@Component({
    selector: 'resume-additional',
    templateUrl: './additional.component.html',
    styleUrls: ['./additional.component.css']
})
export class Additional implements OnInit {
    @Input()
    data: AdditionalModel;

    ngOnInit(): void {
        this.data = new AdditionalModel().deserialize(this.data);
    }
}
