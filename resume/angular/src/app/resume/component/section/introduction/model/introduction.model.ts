import {Serializable} from "../../common.model";

export class IntroductionModel implements Serializable {
    introduction: any = [];

    deserialize(introductions?: any): IntroductionModel {
        if (introductions) {
            for (let introduction of introductions) {
                this.introduction.push(introduction);
            }
        }
        return this;
    }
}
