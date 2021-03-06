import {Serializable} from "../../../common.model";

export class GithubRepositoryModel implements Serializable {
    default_branch: string = '';
    description: string = '';
    forks: string = '';
    full_name: string = '';
    html_url: string = '';
    pushed_at: string = '';
    watchers: string = '';

    deserialize(fields?: any): GithubRepositoryModel {
        let me = this;
        if (fields) {
            Object.keys(this).forEach(key => {
                me[key] = fields[key]
            });
        }
        return this;
    }
}


// "id": 92627599,
//     "node_id": "MDEwOlJlcG9zaXRvcnk5MjYyNzU5OQ==",
//     "name": "guanxi",
//     "full_name": "trash-80/guanxi",
//     "private": false,
//     "owner": {
//     "login": "trash-80",
//         "id": 3317774,
//         "node_id": "MDQ6VXNlcjMzMTc3NzQ=",
//         "avatar_url": "https://avatars1.githubusercontent.com/u/3317774?v=4",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/trash-80",
//         "html_url": "https://github.com/trash-80",
//         "followers_url": "https://api.github.com/users/trash-80/followers",
//         "following_url": "https://api.github.com/users/trash-80/following{/other_user}",
//         "gists_url": "https://api.github.com/users/trash-80/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/trash-80/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/trash-80/subscriptions",
//         "organizations_url": "https://api.github.com/users/trash-80/orgs",
//         "repos_url": "https://api.github.com/users/trash-80/repos",
//         "events_url": "https://api.github.com/users/trash-80/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/trash-80/received_events",
//         "type": "User",
//         "site_admin": false
// },
// "html_url": "https://github.com/trash-80/guanxi",
//     "description": "Moving old guanxi from organization to my personal repository.  It's the version based on QT library and it very outdated.",
//     "fork": false,
//     "url": "https://api.github.com/repos/trash-80/guanxi",
//     "forks_url": "https://api.github.com/repos/trash-80/guanxi/forks",
//     "keys_url": "https://api.github.com/repos/trash-80/guanxi/keys{/key_id}",
//     "collaborators_url": "https://api.github.com/repos/trash-80/guanxi/collaborators{/collaborator}",
//     "teams_url": "https://api.github.com/repos/trash-80/guanxi/teams",
//     "hooks_url": "https://api.github.com/repos/trash-80/guanxi/hooks",
//     "issue_events_url": "https://api.github.com/repos/trash-80/guanxi/issues/events{/number}",
//     "events_url": "https://api.github.com/repos/trash-80/guanxi/events",
//     "assignees_url": "https://api.github.com/repos/trash-80/guanxi/assignees{/user}",
//     "branches_url": "https://api.github.com/repos/trash-80/guanxi/branches{/branch}",
//     "tags_url": "https://api.github.com/repos/trash-80/guanxi/tags",
//     "blobs_url": "https://api.github.com/repos/trash-80/guanxi/git/blobs{/sha}",
//     "git_tags_url": "https://api.github.com/repos/trash-80/guanxi/git/tags{/sha}",
//     "git_refs_url": "https://api.github.com/repos/trash-80/guanxi/git/refs{/sha}",
//     "trees_url": "https://api.github.com/repos/trash-80/guanxi/git/trees{/sha}",
//     "statuses_url": "https://api.github.com/repos/trash-80/guanxi/statuses/{sha}",
//     "languages_url": "https://api.github.com/repos/trash-80/guanxi/languages",
//     "stargazers_url": "https://api.github.com/repos/trash-80/guanxi/stargazers",
//     "contributors_url": "https://api.github.com/repos/trash-80/guanxi/contributors",
//     "subscribers_url": "https://api.github.com/repos/trash-80/guanxi/subscribers",
//     "subscription_url": "https://api.github.com/repos/trash-80/guanxi/subscription",
//     "commits_url": "https://api.github.com/repos/trash-80/guanxi/commits{/sha}",
//     "git_commits_url": "https://api.github.com/repos/trash-80/guanxi/git/commits{/sha}",
//     "comments_url": "https://api.github.com/repos/trash-80/guanxi/comments{/number}",
//     "issue_comment_url": "https://api.github.com/repos/trash-80/guanxi/issues/comments{/number}",
//     "contents_url": "https://api.github.com/repos/trash-80/guanxi/contents/{+path}",
//     "compare_url": "https://api.github.com/repos/trash-80/guanxi/compare/{base}...{head}",
//     "merges_url": "https://api.github.com/repos/trash-80/guanxi/merges",
//     "archive_url": "https://api.github.com/repos/trash-80/guanxi/{archive_format}{/ref}",
//     "downloads_url": "https://api.github.com/repos/trash-80/guanxi/downloads",
//     "issues_url": "https://api.github.com/repos/trash-80/guanxi/issues{/number}",
//     "pulls_url": "https://api.github.com/repos/trash-80/guanxi/pulls{/number}",
//     "milestones_url": "https://api.github.com/repos/trash-80/guanxi/milestones{/number}",
//     "notifications_url": "https://api.github.com/repos/trash-80/guanxi/notifications{?since,all,participating}",
//     "labels_url": "https://api.github.com/repos/trash-80/guanxi/labels{/name}",
//     "releases_url": "https://api.github.com/repos/trash-80/guanxi/releases{/id}",
//     "deployments_url": "https://api.github.com/repos/trash-80/guanxi/deployments",
//     "created_at": "2017-05-27T22:32:49Z",
//     "updated_at": "2017-05-27T22:32:49Z",
//     "pushed_at": "2017-05-27T22:32:49Z",
//     "git_url": "git://github.com/trash-80/guanxi.git",
//     "ssh_url": "git@github.com:trash-80/guanxi.git",
//     "clone_url": "https://github.com/trash-80/guanxi.git",
//     "svn_url": "https://github.com/trash-80/guanxi",
//     "homepage": null,
//     "size": 0,
//     "stargazers_count": 0,
//     "watchers_count": 0,
//     "language": null,
//     "has_issues": true,
//     "has_projects": true,
//     "has_downloads": true,
//     "has_wiki": true,
//     "has_pages": false,
//     "forks_count": 0,
//     "mirror_url": null,
//     "archived": false,
//     "open_issues_count": 0,
//     "license": null,
//     "forks": 0,
//     "open_issues": 0,
//     "watchers": 0,
//     "default_branch": "master"
