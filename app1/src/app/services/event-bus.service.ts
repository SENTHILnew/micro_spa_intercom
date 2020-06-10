import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
public eventBus:any;
  constructor() { }
}
