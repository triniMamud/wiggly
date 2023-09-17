import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { getAllMisMascotasUrl } from "../constants/endpoints";

@Injectable({
  providedIn: 'root'
})
export class MisMascotasService {
  
  public user: any = this.authenticationService.getUser();

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {}

  getAllMisMascotas(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);

    return this.http.get<any>(getAllMisMascotasUrl, { headers });
  }
}