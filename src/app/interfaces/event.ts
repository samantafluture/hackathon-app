export interface Event {
  _id: string;
  name: string;
  description: string;
  price: number;
  location: string;
  date: Date;
  url: string;
  __v: number;
}

export interface Events extends Array<Event> {}
