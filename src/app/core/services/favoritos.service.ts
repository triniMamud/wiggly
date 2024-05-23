import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { favoritosControllerUrl } from "../constants/endpoints";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  
  public user: any = this.authenticationService.getUser();

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {}

  getFavoritosByUser(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);

    return this.http.get<any>(favoritosControllerUrl, { headers });
  }
}