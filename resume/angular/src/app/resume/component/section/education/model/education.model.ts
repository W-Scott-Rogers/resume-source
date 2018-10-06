import {Serializable} from "./common.model";

export class EducationModel implements Serializable {
    level: string = '';
    subject: string = '';
    date: string = '';
    school: string = '';

    deserialize(fields?: Partial<EducationModel>): EducationModel {
        let me = this;
        if (fields) {
            Object.keys(this).forEach(key => {
                me[key] = fields[key]
            });
        }
        return this;
    }
}
