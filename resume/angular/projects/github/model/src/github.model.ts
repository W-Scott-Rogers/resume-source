import {GithubRepositoryModel} from "./github-repository.model";

export class GithubModel {
    user: string;
    repositories: GithubRepositoryModel[];
}
