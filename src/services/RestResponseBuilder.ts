import { ResultDiscriminator } from "../Models/ResultDiscriminator";
import { from, Observable } from 'rxjs';
import { map, concatAll } from 'rxjs/operators';
import { ApiError } from "../Models/ApiError";
import { Success } from "../Models/Success";

export class RestResponseBuilder<T> {
  private body: string | undefined;
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
      let options = {
        method: this.method,
        headers: {
          'Content-Type': 'application/json'
        }
      };

      if(this.method.toUpperCase() != 'GET'){
        options = Object.assign(options, {body: this.body})
      }
      const promise = fetch(this.address, options);
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
