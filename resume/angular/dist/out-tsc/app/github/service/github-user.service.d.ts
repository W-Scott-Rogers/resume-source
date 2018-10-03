import { HttpClient } from "@angular/common/http";
export declare class GithubUserService {
    private http;
    /**
     * Possibly replaced with:
     * "@octokit/rest":"~15.12.1"
     */
    private githubAPI;
    constructor(http: HttpClient);
    getForUser(user: string): import("../../../../../../../../../../Users/Scott/Projects/resume-source/resume/angular/node_modules/rxjs/internal/Observable").Observable<Object>;
}
