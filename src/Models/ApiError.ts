import { Result } from "./Result";
import { ResultDiscriminator } from "./ResultDiscriminator";

export interface ApiError {
  type: ResultDiscriminator.Error;
  errorMessage: string;
}
