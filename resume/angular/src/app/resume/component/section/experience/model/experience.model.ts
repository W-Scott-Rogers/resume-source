import {Serializable} from "./common.model";

export class ExperienceModel implements Serializable {
    title: string = '';
    start: string = '';
    end: string = '';
    employer: string = '';
    description: string = '';
    example?: String[] = [];

    deserialize(fields?: Partial<ExperienceModel>): ExperienceModel {
        let me = this;
        if (fields) {
            Object.keys(this).forEach(key => {
                me[key] = fields[key]
            });
        }
        return this;
    }

}
