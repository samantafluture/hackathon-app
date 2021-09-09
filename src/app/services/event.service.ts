import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Events } from '../interfaces/event';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getAllEvents() {
    return this.httpClient.get<Events>(`${API}/event/all`);
  }
}
