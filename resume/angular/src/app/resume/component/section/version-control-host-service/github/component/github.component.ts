import {Component, Input, OnInit} from "@angular/core";
import {GithubModel} from "../model/github.model";
import {GithubUserService} from "../service/github-user.service";


@Component({
    selector: 'resume-vchs-github',
    templateUrl: './github.component.html',
    styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
    @Input()
    data: any;

    githubList: GithubModel[];
    githubRepositoryLoaded: Promise<boolean>;

    constructor(
        private githubUserService: GithubUserService
    ) { }

    ngOnInit(): void {
        this.githubList = [];
        for (let data of this.data) {
            let githubModel = new GithubModel();
            githubModel.user = data['user'];
            this.loadRepository(githubModel, data['repo']);
            this.githubList.push(githubModel);
        }
    }

    loadRepository(githubModel: GithubModel, repositoryList: String[]) {
        let me = this;
        this.githubUserService.getForUser(githubModel.user).subscribe((response: Object) => {
            if (response['meta']['status'] === 200) {
                let repositories = response['data'].filter(repo => {
                    return repositoryList.includes(repo['full_name']);
                });
                githubModel.deserialize(repositories);
            }
            me.githubRepositoryLoaded = Promise.resolve(true);
        });
    }

    showDate(date: string): string {
        let realDate = new Date(date);
        return (`${(realDate.getMonth() + 1)}-${realDate.getDate()}-${realDate.getFullYear()}`);
    }
}
