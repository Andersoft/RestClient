import { Observable } from 'rxjs';
import { ApiError } from "../Models/ApiError";
import { Success } from "../Models/Success";
export declare class RestClient {
    constructor();
    PostAsync<T>(address: string, model: {}): Observable<ApiError | Success<T>>;
    GetAsync<T>(address: string): Observable<ApiError | Success<T>>;
}
