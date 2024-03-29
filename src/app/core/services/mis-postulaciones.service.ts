import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from "rxjs";
import { postulationsControllerUrl } from "../constants/endpoints";

@Injectable({
  providedIn: 'root'
})
export class MisPostulacionesService {
  
  public user: any = this.authenticationService.getUser();
  private refreshPostulacionesSubject = new Subject<void>();

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {}

  getMisPostulacionesByUser(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);

    return this.http.get<any>(postulationsControllerUrl, { headers });
  }

  updateEstadoPostulacion(idPostulacion: any, status: any): Observable<any> {
    return this.http.put<any>(postulationsControllerUrl+`/${idPostulacion}`, status);
  }

  refreshPostulaciones() {
    this.refreshPostulacionesSubject.next();
  }

  getRefreshPostulacionesObservable() {
    return this.refreshPostulacionesSubject.asObservable();
  }
}