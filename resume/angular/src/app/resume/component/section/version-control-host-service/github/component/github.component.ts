import {GithubModel, GithubUserService} from "@trash80/github";
import {AfterViewInit, Component, Input} from "@angular/core";


@Component({
    selector: 'vchs-github',
    styleUrls: ['./github.component.css'],
    templateUrl: './github.component.html'
})
export class GithubComponent implements AfterViewInit {
    @Input()
    data: Object;

    github: GithubModel;
    githubRepositoryLoaded: Promise<boolean>;

    constructor(
        private githubUserService: GithubUserService
    ) {
        this.github = new GithubModel();
    }

    ngAfterViewInit(): void {
        let me = this;
        me.github.user = me.data['user'];
        this.githubUserService.getForUser(me.github.user).subscribe((response: Object) => {
            if (response['meta']['status'] === '200') {
                let repoData = response['data'] && response['data'].length > 1 ? response['data'].first() : response['data'];
                me.github.repositories = repoData.filter(repo => {
                    return me.data['repo'].includes(repo['full_name']);
                });
            }
            me.githubRepositoryLoaded = Promise.resolve(true);
        });
    }

    showDate(date: string): string {
        let realDate = new Date(date);
        return (`${(realDate.getMonth() + 1)}-${realDate.getDate()}-${realDate.getFullYear()}`);
    }
}
