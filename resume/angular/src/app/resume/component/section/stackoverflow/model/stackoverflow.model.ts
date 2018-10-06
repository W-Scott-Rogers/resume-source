import {Serializable} from "./common.model";

export class StackoverflowModel implements Serializable{
    profileurl: string = '';
    flairimageurl: string = '';

    deserialize(fields?: Partial<StackoverflowModel>): StackoverflowModel {
        let me = this;
        if (fields) {
            Object.keys(this).forEach(key => {
                me[key] = fields[key]
            });
        }
        return this;
    }
}
