import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class GithubUserService {
    /**
     * Possibly replaced with:
     * "@octokit/rest":"~15.12.1"
     */

    private githubAPI: string;

    constructor(private http: HttpClient) {
        this.githubAPI = 'https://api.github.com'
    }

    getForUser(user: string): any {
        let url = this.githubAPI.concat(`/users/${user}/repos?per_page=100`);
        return this.http.jsonp(url, 'callback');
    }
}
