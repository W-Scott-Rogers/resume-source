import {Serializable} from "./common.model";
import {EducationModel} from "./education.model";

export class EducationListModel implements Serializable {
    education: Array<EducationModel> = Array<EducationModel>();

    deserialize(fields?: Partial<EducationListModel>): EducationListModel {
        if (fields) {
            Object.keys(this).forEach(key => {
                if (Array.isArray(fields[key]) &&
                    Array.isArray(this[key]) &&
                    key === 'education') {
                    fields[key].forEach(link => {
                        this[key].push(new EducationModel().deserialize(link));
                    },this);
                } else {
                    this[key] = fields[key];
                }
            });
        }
        return this;
    }
}
