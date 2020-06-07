import { Result } from "./Result";
import { ResultDiscriminator } from "./ResultDiscriminator";
export interface Success<T> extends Result {
    type: ResultDiscriminator.Success;
    value: T;
}
