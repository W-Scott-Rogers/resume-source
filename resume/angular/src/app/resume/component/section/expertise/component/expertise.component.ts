import {Component, Input, OnInit} from "@angular/core";
import {ExpertiseModel} from "../model/expertise.model";

@Component({
    selector: 'resume-expertise',
    templateUrl: './expertise.component.html',
    styleUrls: ['./expertise.component.css']
})
export class Expertise implements OnInit {
    @Input()
    data: any;

    expertiseList: ExpertiseModel[] = [];

    ngOnInit(): void {
        for (let expert of this.data) {
            this.expertiseList.push(new ExpertiseModel().deserialize(expert));
        }
    }
}
