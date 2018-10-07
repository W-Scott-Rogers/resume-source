import { HttpClient } from "@angular/common/http";
export declare class YamlService {
    private http;
    constructor(http: HttpClient);
    getGetConfiguration(resumeFile: string): any;
}
