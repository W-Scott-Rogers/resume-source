import {Component, Input, OnInit} from "@angular/core";
import {ExpertiseModel} from "../model/expertise.model";

@Component({
    selector: 'resume-expertise',
    templateUrl: './expertise.component.html',
    styleUrls: ['./expertise.component.css']
})
export class Expertise implements OnInit {
    @Input()
    data: ExpertiseModel;

    ngOnInit(): void {
        this.data = new ExpertiseModel().deserialize(this.data);
    }
}
