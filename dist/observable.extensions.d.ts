import { ApiError } from "./ApiError";
import { Success } from "./Success";
declare module 'rxjs/internal/Observable' {
    interface Observable<T> {
        either<TOut>(this: Observable<ApiError | Success<TOut>>, success: (response: TOut) => void, failure: (error: ApiError) => void): void;
    }
}
