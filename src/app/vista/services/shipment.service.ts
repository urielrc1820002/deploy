import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Shipment } from '../model/shipment';
@Injectable({
  providedIn:'root'
})
export class ShipmentService {
  constructor(private http: HttpClient) { }
 
}
