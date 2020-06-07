import { ApiError } from "../Models/ApiError";
import { Success } from "../Models/Success";
declare module 'rxjs/internal/Observable' {
    interface Observable<T> {
        either<TOut>(this: Observable<ApiError | Success<TOut>>, success: (response: TOut) => void, failure: (error: ApiError) => void): void;
    }
}
