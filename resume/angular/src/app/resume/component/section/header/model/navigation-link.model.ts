import {Serializable} from "../../common.model";

export class NavigationLinkModel implements Serializable{
    title: string = '';
    url: string = '';

    deserialize(fields?: any): NavigationLinkModel {
        let me = this;
        if (fields) {
            Object.keys(this).forEach(key => {
                me[key] = fields[key]
            });
        }
        return this;
    }
}
