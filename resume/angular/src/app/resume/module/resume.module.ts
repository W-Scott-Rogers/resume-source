import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

import {YamlService} from "@trash80/yaml";
import {GithubUserService} from "@trash80/github";

import {ResumeComponent} from "../component";
import {GithubComponent} from "../component";
import {HeaderComponent} from "../component";
import {Stackoverflow} from "../component";
import {Expertise} from "../component";
import {Experience} from "../component";
import {Education} from "../component";
import {Additional} from "../component";


@NgModule({
    declarations: [
        ResumeComponent,
        Additional,
        Education,
        Expertise,
        Experience,
        GithubComponent,
        HeaderComponent,
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
