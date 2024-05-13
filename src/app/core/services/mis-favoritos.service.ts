import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { AuthenticationService } from "./authentication.service";
import { favoritosControllerUrl } from "../constants/endpoints";

@Injectable({
  providedIn: 'root'
})
export class MisFavoritosService {
  
  public user: any = this.authenticationService.getUser();
  private refreshFavouritesSubject = new Subject<void>();
  private petsSource = new BehaviorSubject<any>({});
  currentPets = this.petsSource.asObservable();

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService) {}

  getMisFavoritosByUser(): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);

    return this.http.get<any>(favoritosControllerUrl, { headers });
  }

  addFavouritePet(pet: any): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);

    return this.http.post<any>(favoritosControllerUrl, pet, { headers, observe: 'response' });
  }

  deleteFavouritePet(petId: any): Observable<HttpResponse<void>> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);

    return this.http.delete<any>(favoritosControllerUrl + `/${petId}`, { headers, observe: 'response'});
  }

  refreshFavourites() {
    this.refreshFavouritesSubject.next();
  }

  getRefreshFavouritesObservable() {
    return this.refreshFavouritesSubject.asObservable();
  }

  setInitialStateFav(newState: any) {
    this.petsSource.next(newState);
  }

  updateFavProperty(id: number, newProperty: any) {
    const updatedValues = this.petsSource.value.map((item: any) => {
      if (item.pet.id === id) {
        item.pet.isFavPet = newProperty;
      }
      return item;
    });
    this.petsSource.next(updatedValues);
  }
}