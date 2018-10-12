import {Serializable} from "../../common.model";
import {ExperienceModel} from "./experience.model";

export class ExperienceListModel implements Serializable {
    experiences: Array<ExperienceModel> = Array<ExperienceModel>();

    deserialize(experiences?: any): ExperienceListModel {
        if (experiences) {
            for (let experience of experiences) {
                this.experiences.push(new ExperienceModel().deserialize(experience));
            }
        }
        return this;
    }
}
