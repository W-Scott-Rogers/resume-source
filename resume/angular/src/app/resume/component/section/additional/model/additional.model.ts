import {Serializable} from "./common.model";

export class AdditionalModel implements Serializable {
    additionalinfo: string = '';

    deserialize(fields?: Partial<AdditionalModel>): AdditionalModel {
        let me = this;
        if (fields) {
            Object.keys(this).forEach(key => {
                me[key] = fields[key]
            });
        }
        return this;
    }

}
