import {Component, Input, OnInit} from "@angular/core";
import {ExperienceListModel} from "../model/experience-list.model";

@Component({
    selector: 'resume-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class Experience implements OnInit {
    @Input()
    data: ExperienceListModel;

    ngOnInit(): void {
        this.data = new ExperienceListModel().deserialize(this.data);
    }
}
