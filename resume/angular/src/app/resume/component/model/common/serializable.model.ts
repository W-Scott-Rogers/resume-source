import {BaseModel} from "./base.model";

export interface Serializable {
    deserialize(fields?:Partial<BaseModel>): BaseModel;
}
