import {Serializable} from "./common.model";
import {ExperienceModel} from "./experience.model";

export class ExperienceListModel implements Serializable {
    experiences: Array<ExperienceModel> = Array<ExperienceModel>();

    deserialize(fields?: Partial<ExperienceListModel>): ExperienceListModel {
        if (fields) {
            Object.keys(this).forEach(key => {
                if (Array.isArray(fields[key]) &&
                    Array.isArray(this[key]) &&
                    key === 'experiences') {
                    fields[key].forEach(link => {
                        this[key].push(new ExperienceModel().deserialize(link));
                    },this);
                } else {
                    this[key] = fields[key];
                }
            });
        }
        return this;
    }
}
