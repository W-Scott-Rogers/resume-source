import {Component, Input, OnInit} from "@angular/core";
import {StackoverflowModel} from "../model/stackoverflow.model";

@Component({
    selector: 'resume-stackoverflow',
    templateUrl: 'stackoverflow.component.html',
    styleUrls: ['stackoverflow.component.css']
})
export class Stackoverflow implements OnInit{
    @Input()
    data: StackoverflowModel;

    ngOnInit(): void {
        this.data = new StackoverflowModel().deserialize(this.data);
    }
}
