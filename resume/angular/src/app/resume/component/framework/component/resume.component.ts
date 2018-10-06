import {AfterViewInit, Component} from '@angular/core';
import {YamlService} from "@trash80/yaml";

@Component({
    selector: 'resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
    data: string;
    configurationLoaded: Promise<boolean>;

    constructor(
        private yamlService: YamlService
    ) { }

    ngAfterViewInit(): void {
        let me = this;
        this.yamlService.getGetConfiguration("./assets/resume.yml").subscribe(data => {
            me.data = data;
            me.configurationLoaded = Promise.resolve(true);
        });
    }
}
