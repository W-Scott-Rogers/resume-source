import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientJsonpModule, HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {YamlService} from "./service/yaml/yaml.service";
import {GithubUserService} from "./service/github/github-user.service";

@NgModule({
    declarations: [
        AppComponent
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
    bootstrap: [AppComponent]
})
export class AppModule {
}
