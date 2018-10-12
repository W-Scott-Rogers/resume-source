import {Component, Input, OnInit} from "@angular/core";
import {IntroductionModel} from "../model/introduction.model";

@Component({
    selector: 'resume-introduction',
    templateUrl: './introduction.component.html',
    styleUrls: ['./introduction.component.css']
})
export class Introduction implements OnInit {
    @Input()
    data: IntroductionModel;

    ngOnInit(): void {
        this.data = new IntroductionModel().deserialize(this.data);
    }
}
