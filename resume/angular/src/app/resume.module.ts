import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";
import {ResumeComponent} from "./resume";
import {YamlService} from "./yaml";
import {GithubUserService} from "./github/service";

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
