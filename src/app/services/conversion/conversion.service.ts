import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class ConversionService {
  constructor(private httpClient: HttpClient) {
  }
  convertFunction(field: any) {
    return this.httpClient.post('/api/convert', field)
  }

}
