import {AfterViewInit, Component} from '@angular/core';
import {YamlService} from "../../yaml/";
import {GithubModel, GithubUserService} from "../../github/";

@Component({
    selector: 'app-root',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {
    data: string;
    configurationLoaded: Promise<boolean>;

    github: GithubModel;
    githubRepositoryLoaded: Promise<boolean>;

    constructor(
        private yamlService: YamlService,
        private githubUserService: GithubUserService
    ) {
    }

    ngAfterViewInit(): void {
        let me = this;
        this.yamlService.getGetConfiguration().subscribe(data => {
            me.data = data;
            if (data['github']) {
                me.github = new GithubModel();
                me.github.user = data['github']['user'];
                this.githubUserService.getForUser(data['github']['user']).subscribe((response: Object) => {
                    me.github.repositories = response['data'].filter(repo => {
                        return data['github']['repo'].includes(repo['full_name']);
                    });
                    me.githubRepositoryLoaded = Promise.resolve(true);
                });
            }
            me.configurationLoaded = Promise.resolve(true);
        });
    }

    showDate(date: string): string {
        let realDate = new Date(date);
        return (`${(realDate.getMonth() + 1)}-${realDate.getDate()}-${realDate.getFullYear()}`);
    }
}
