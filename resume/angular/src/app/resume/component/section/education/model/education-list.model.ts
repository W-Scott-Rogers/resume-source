import {Serializable} from "../../common.model";
import {EducationModel} from "./education.model";

export class EducationListModel implements Serializable {
    education: EducationModel[] = [];

    deserialize(educationList?: any): EducationListModel {
        if (educationList) {
            for (let education of educationList) {
                this.education.push(new EducationModel().deserialize(education));
            }
        }
        return this;
    }
}
