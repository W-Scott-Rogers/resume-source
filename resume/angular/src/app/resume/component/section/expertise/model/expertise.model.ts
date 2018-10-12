import {Serializable} from "../../common.model";

export class ExpertiseModel implements Serializable{
    title: string = '';
    type: string = '';
    details: String[] = [];

    deserialize(fields?: any): ExpertiseModel {
        let me = this;
        if (fields) {
            Object.keys(this).forEach(key => {
                me[key] = fields[key]
            });
        }
        return this;
    }
}
