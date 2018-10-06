import {Component, Input, OnInit} from "@angular/core";
import {EducationListModel} from "../model/education-list.model";

@Component({
    selector: 'resume-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class Education implements OnInit {
    @Input()
    data: EducationListModel;

    ngOnInit(): void {
        this.data = new EducationListModel().deserialize(this.data);
    }
}
