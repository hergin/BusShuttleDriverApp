import { Injectable } from '@angular/core';
import { LogService } from './log.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DropdownsService {
  baseUrl: string;

  private busNumberSource = new BehaviorSubject<string>('Select a Bus');
  currentBusNumber = this.busNumberSource.asObservable();

  constructor(private logService: LogService, private http: HttpClient) {
    this.baseUrl = this.logService.baseUrl;
   }

  getAllStops(selectedLoop: string) {
    return this.http.get(this.baseUrl + '/getStops.php?searchTerm=' + selectedLoop);
  }

  getAllLoops() {
    return this.http.get(this.baseUrl + '/getLoops.php');
  }

  getDrivers() {
    return this.http.get(this.baseUrl + '/getUsers.php');
  }

  getBusNumbers() {
    return this.http.get(this.baseUrl + '/getBusNumbers.php');
  }

  changeBus(message: string) {
    this.busNumberSource.next(message);
  }






}