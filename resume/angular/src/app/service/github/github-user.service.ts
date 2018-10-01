import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class GithubUserService {

    private githubAPI: string;

    constructor(private http: HttpClient) {
        this.githubAPI = 'https://api.github.com'
    }

    getGitHubUserRepositories(user: string) {
        let me = this;
        let url = this.githubAPI.concat(`/users/${user}/repos?per_page=100`);
        return me.http.jsonp(url, 'callback');
    }
}
