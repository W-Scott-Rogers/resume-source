import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

import {YamlService} from "@trash80/yaml";

import {Additional} from "../component/section";
import {Education} from "../component/section";
import {Experience} from "../component/section";
import {Expertise} from "../component/section";
import {GithubComponent} from "../component/section";
import {GithubUserService} from "../component/section"
import {HeaderComponent} from "../component/section";
import {Introduction} from "../component/section";
import {ResumeComponent} from "../component/framework";
import {Stackoverflow} from "../component/section";

@NgModule({
    declarations: [
        ResumeComponent,
        Additional,
        Education,
        Expertise,
        Experience,
        GithubComponent,
        HeaderComponent,
        Introduction,
        Stackoverflow
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
export class ResumeModule { }
