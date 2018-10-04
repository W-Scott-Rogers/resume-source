import JSYaml from "./yaml-load";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";

@Injectable()
export class YamlService {

    constructor(private http: HttpClient) {
    }

    getGetConfiguration(resumeFile: string): any {
        let me = this;
        let jsyaml = JSYaml;
        return me.http.get(resumeFile, {responseType: 'text'})
            .pipe(
                map(response => {
                    return jsyaml.safeLoad(response);
                })
            );
    }
}
