import { Observable } from 'rxjs';
import { ApiError } from '../Models/ApiError';
import { Success } from '../Models/Success';
export declare class RestResponseBuilder<T> {
    private address;
    private body;
    private method;
    constructor(address: string);
    withBody(body: {}): RestResponseBuilder<T>;
    withMethod(method: string): RestResponseBuilder<T>;
    build(): Observable<ApiError | Success<T>>;
    handleResponse<T>(response: Response): Promise<ApiError | Success<T>>;
}
