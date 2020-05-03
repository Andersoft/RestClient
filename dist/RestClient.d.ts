import { Observable } from 'rxjs';
import { ApiError } from "./ApiError";
import { Success } from "./Success";
export declare class RestClient {
    constructor();
    PostAsync<T>(address: string, model: {}): Observable<ApiError | Success<T>>;
    GetAsync<T>(address: string): Observable<ApiError | Success<T>>;
}
