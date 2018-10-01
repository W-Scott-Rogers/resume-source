import {Component, AfterViewInit, OnInit, Renderer2, OnDestroy, Inject} from '@angular/core';
import {YamlService} from "./service/yaml/yaml.service";
import {GithubUserService} from "./service/github/github-user.service";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    data: string;
    configurationLoaded: Promise<boolean>;

    github: Object;
    githubRepositoryLoaded: Promise<boolean>;

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private yamlService: YamlService,
        private githubUserService: GithubUserService
    ) { }

    // ngOnInit(): void {
    //     this.renderer.addClass(this.document.body, 'body');
    // }
    //
    // ngOnDestroy(): void {
    //     this.renderer.removeClass(this.document.body, 'body');
    // }

    ngAfterViewInit(): void {
        let me = this;
        this.yamlService.getGetConfiguration().subscribe(data => {
            me.data = data;
            if (data['github']) {
                this.githubUserService.getGitHubUserRepositories(data['github']['user']).subscribe((response: Object) => {
                    me.github = response['data'].filter( repo => {
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
