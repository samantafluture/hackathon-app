import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const url = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getAllEvents() {
    return this.httpClient.get<any>(`${url}/event/all`);
  }
}
