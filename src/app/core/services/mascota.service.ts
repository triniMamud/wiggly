import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { getAllMascotasUrl } from "../constants/endpoints";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  
  public user: any = this.authenticationService.getUser();

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {}

  getAllMascotas(): Observable<any> {
    return this.http.get<any>(getAllMascotasUrl);
  }
}