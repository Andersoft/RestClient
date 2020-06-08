import { Result } from '../Models/Result';
import { pipe, Observable } from 'rxjs';
import { filter, reduce  } from 'rxjs/operators';
import { ApiError } from '../Models/ApiError';
import { Success } from '../Models/Success';
import { WellKnownMethods } from '../Models/WellKnownMethods';
import { RestResponseBuilder } from './RestResponseBuilder';

export class RestClient {
  constructor() { }

  public postAsync<T>(address: string, model: {}): Observable<ApiError | Success<T>> {
    return new RestResponseBuilder<T>(address)
      .withBody(model)
      .withMethod(WellKnownMethods.POST)
      .build();
  }

  public getAsync<T>(address: string): Observable<ApiError | Success<T>> {
    return new RestResponseBuilder<T>(address)
      .withMethod(WellKnownMethods.GET)
      .build();
  }
}
