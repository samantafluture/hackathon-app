import { Event } from './../interfaces/event';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Events } from '../interfaces/event';
import { map, tap } from 'rxjs/operators';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private httpClient: HttpClient) {}

  getAllEvents(value?: string) {
    const params = value ? new HttpParams().append('name', value) : undefined;
    return this.httpClient
      .get<Events>(`${API}/event/search`, { params })
      .pipe(
        map((events) =>
          events.sort((eventA, eventB) => this.sortByPrice(eventA, eventB))
        )
      );
  }

  private sortByPrice(eventA: Event, eventB: Event) {
    if (eventA.price > eventB.price) {
      return 1;
    }
    if (eventA.price < eventB.price) {
      return -1;
    }
    return 0;
  }
}
