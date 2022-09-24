import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AreaService {
  constructor(private httpClient: HttpClient) {
  }

  calculateAreaCircle(field: any) {
    return this.httpClient.post('/api/area/circle', field)
  }
  calculateAreaSquare(field: any) {
    return this.httpClient.post('/api/area/square', field)
  }
  calculateAreaRectangle(field: any) {
    return this.httpClient.post('/api/area/rectangle', field)
  }
  calculateAreaTrapeze(field: any) {
    return this.httpClient.post('/api/area/trapeze', field)
  }
}
