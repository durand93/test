import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable(
)
export class PerimeterService {
  constructor(private httpClient: HttpClient) {
  }
  calculatePerimeterCircle(field: any) {
    return this.httpClient.post('/api/perimeter/circle', field);
  }
  calculatePerimeterSquare(field: any) {
    return this.httpClient.post('/api/perimeter/square', field);
  }
  calculatePerimeterRectangle(field: any) {
    return this.httpClient.post('/api/perimeter/rectangle', field);
  }
  calculatePerimeterTrapeze(field: any) {
    return this.httpClient.post('/api/perimeter/trapeze', field);
  }
}
