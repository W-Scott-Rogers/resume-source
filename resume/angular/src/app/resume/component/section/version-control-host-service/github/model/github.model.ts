import {Serializable} from "../../../common.model";
import {GithubRepositoryModel} from "./github-repository.model";

export class GithubModel implements Serializable {
    user: string = '';
    repositories: GithubRepositoryModel[] = [];

    deserialize(repositories?: any): GithubModel {
        if (repositories) {
            for (let repository of repositories) {
                this.repositories.push(new GithubRepositoryModel().deserialize(repository));
            }
        }
        return this;
    }
}
