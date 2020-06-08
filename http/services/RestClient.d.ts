import { Observable } from 'rxjs';
import { ApiError } from '../Models/ApiError';
import { Success } from '../Models/Success';
export declare class RestClient {
    constructor();
    postAsync<T>(address: string, model: {}): Observable<ApiError | Success<T>>;
    getAsync<T>(address: string): Observable<ApiError | Success<T>>;
}
