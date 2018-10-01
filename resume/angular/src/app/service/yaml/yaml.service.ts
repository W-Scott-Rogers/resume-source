import JSYaml from "src/app/service/yaml/yaml-load";

import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class YamlService {

    constructor(private http: HttpClient) { }

    getGetConfiguration(): any {
        let me = this;
        let jsyaml = JSYaml;
        return me.http.get("./assets/_config.yml", {responseType: 'text'})
            .pipe(
                map(response => {
                    return jsyaml.safeLoad(response);
                })
            );
    }
}
