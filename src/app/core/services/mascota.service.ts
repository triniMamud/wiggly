import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { getAllMascotasUrl, postulationsControllerUrl } from "../constants/endpoints";
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
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);
    
    return this.http.get<any>(getAllMascotasUrl, {headers});
  }

  postulateToPet(petId: any): Observable<HttpResponse<void>> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);
    
    return this.http.post<any>(postulationsControllerUrl, {petId: petId}, { headers });
  }

  updateFav(petId: any, isFavPet: boolean): Observable<any> {
    return this.http.patch<any>(getAllMascotasUrl + `/${petId}`, {isFavPet: isFavPet});
  }
}