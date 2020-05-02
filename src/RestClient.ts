import { Result } from "./Result";
import { pipe, Observable } from 'rxjs';
import { filter, reduce  } from 'rxjs/operators'
import { ApiError } from "./ApiError";
import { Success } from "./Success";
import { WellKnownMethods } from "./WellKnownMethods";
import { RestResponseBuilder } from "./RestResponseBuilder";

export class RestClient {
  constructor() { }

  public PostAsync<T>(address: string, model: {}): Observable<ApiError | Success<T>> {
    return new RestResponseBuilder<T>(address)
      .withBody(model)
      .withMethod(WellKnownMethods.POST)
      .build();
  }

  public GetAsync<T>(address: string): Observable<ApiError | Success<T>> {
    return new RestResponseBuilder<T>(address)
      .withMethod(WellKnownMethods.GET)
      .build();
  }
}


