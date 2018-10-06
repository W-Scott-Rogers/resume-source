import {Component, Input, OnInit} from "@angular/core";
import {NavigationHeaderModel} from "../model/navigation-header.model";

@Component({
    selector: 'resume-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input()
    data: NavigationHeaderModel;

    ngOnInit(): void {
        this.data = new NavigationHeaderModel().deserialize(this.data);
    }
}
