import {NavigationLinkModel} from "./navigation-link.model";
import {Serializable} from "./common.model";

export class NavigationHeaderModel implements Serializable{
    title: string = '';
    primarylinks: Array<NavigationLinkModel> = Array<NavigationLinkModel>();

    deserialize(fields?:Partial<NavigationHeaderModel>): NavigationHeaderModel {
        if (fields) {
            Object.keys(this).forEach(key => {
                if (Array.isArray(fields[key]) &&
                    Array.isArray(this[key]) &&
                    key === 'primarylinks') {
                    fields[key].forEach(link => {
                        this[key].push(new NavigationLinkModel().deserialize(link));
                    },this);
                } else {
                    this[key] = fields[key];
                }
            },this);
        }
        return this;
    }
}
