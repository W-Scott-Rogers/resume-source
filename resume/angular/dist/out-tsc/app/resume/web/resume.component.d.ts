import { AfterViewInit } from '@angular/core';
import { YamlService } from "../../yaml/";
import { GithubModel, GithubUserService } from "../../github/";
export declare class ResumeComponent implements AfterViewInit {
    private yamlService;
    private githubUserService;
    data: string;
    configurationLoaded: Promise<boolean>;
    github: GithubModel;
    githubRepositoryLoaded: Promise<boolean>;
    constructor(yamlService: YamlService, githubUserService: GithubUserService);
    ngAfterViewInit(): void;
    showDate(date: string): string;
}
