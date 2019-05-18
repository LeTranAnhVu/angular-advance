import {Injectable} from '@angular/core';

@Injectable(
  {
  providedIn: 'root'
}
)
export class DashboardService {

  public data = 'original';

  constructor() {
  }

  getData() {
    return this.data;
  }

  setData(val) {
    this.data = val;
  }
}
