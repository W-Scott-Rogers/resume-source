import {BaseModel} from "./base.model";

export interface Serializable {
    deserialize(fields?: any): BaseModel;
}
