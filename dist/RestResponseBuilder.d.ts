import { Observable } from 'rxjs';
import { ApiError } from "./ApiError";
import { Success } from "./Success";
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
