import { ApiError } from "./ApiError";
import { Success } from "./Success";
import { ResultDiscriminator } from "./ResultDiscriminator";
import { Observable } from 'rxjs'

declare module 'rxjs/internal/Observable' {
  
  interface Observable<T> {
    either<TOut>(this: Observable<ApiError | Success<TOut>>,
      success: (response: TOut) => void,
      failure: (error: ApiError) => void): void;
  }
}

function either<TOut>(this: Observable<ApiError | Success<TOut>>, success: (success: TOut) => void, failure: (error: ApiError) => void) {
    this.subscribe({
      next: (result: ApiError | Success<TOut>) => {
        switch (result.type) {
        case ResultDiscriminator.Success:
          success(result.value);
          break;
        default:
          failure(result);
          break;
        }
      }
    });
}

Observable.prototype.either = either;
