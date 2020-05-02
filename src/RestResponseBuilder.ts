import { ResultDiscriminator } from "./ResultDiscriminator";
import { from, Observable } from 'rxjs';
import { map, concatAll } from 'rxjs/operators';
import { ApiError } from "./ApiError";
import { Success } from "./Success";
export class RestResponseBuilder<T> {
  private body: string = '';
  private method: string = 'GET';
  constructor(private address: string) { }
  withBody(body: {}): RestResponseBuilder<T> {
    this.body = JSON.stringify(body);
    return this;
  }
  withMethod(method: string): RestResponseBuilder<T> {
    this.method = method;
    return this;
  }
  build(): Observable<ApiError | Success<T>> {
    const httpCall = () => {
      const promise = fetch(this.address, {
        method: this.method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: this.body
      });
      return <Observable<Response>>from(promise);
    };
    const getResult = map((response: Response) => from(this.handleResponse<T>(response)));
    return httpCall().pipe(getResult, concatAll());
  }
  async handleResponse<T>(response: Response): Promise<ApiError | Success<T>> {
    try {
      return await response.json();
    }
    catch (error) {
      return { type: ResultDiscriminator.Error, errorMessage: "Unknown Response" };
    }
  }
}
