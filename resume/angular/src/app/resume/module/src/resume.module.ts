import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

import {ResumeComponent} from "../../component";
import {YamlService} from "@trash80/yaml";
import {GithubUserService} from "@trash80/github";


@NgModule({
    declarations: [
        ResumeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientJsonpModule
    ],
    providers: [
        YamlService,
        GithubUserService
    ],
    bootstrap: [ResumeComponent]
})
export class ResumeModule {
}
