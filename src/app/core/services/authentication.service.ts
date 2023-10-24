import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CurrentUser } from '../models/user.model';
import { ConfigService } from '../services/config.service';
//import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  public user: any;
  private baseUrl: string = this.configService.getHost();

  constructor(private http: HttpClient,
    private configService: ConfigService) {
    this.getUser()
  }

  login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', email)
    .set('password', password);

    localStorage.setItem('userEmail', JSON.stringify(email));
    return this.http.post<any>(this.configService.getLoginUrl(), null, { headers })
    .pipe(map((res) => {
      //let decoded: TokenDecode = <TokenDecode>jwt_decode(res?.data?.token);

      const kCloackUser: any = {
        name: res?.name,
        email: res?.email
      };

      localStorage.setItem('user', JSON.stringify(kCloackUser));
      this.user = kCloackUser

      return kCloackUser;
    }));
  }

  register(data: any) {
    const body = {
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      age: data.age,
      dni: data.dni,
      phone: data.phone,
      location: data.location,
      adoptionType: data.adoptionType
    }

    return this.http.post<any>(this.configService.getRegisterUrl(), body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('password', data.password)
    })
      .pipe(map((res) => {
        //let decoded: TokenDecode = <TokenDecode>jwt_decode(res?.data?.token);

        const kCloackUser: any = {
          name: res?.name,
          email: res?.email
        };

        localStorage.setItem('user', JSON.stringify(kCloackUser));
        this.user = kCloackUser

        /*const kCloackCurrentUser: CurrentUser = {
          tienePermiso: true,
          mensaje: null,
          token: res?.data?.token,
          rolId: user?.role_id,
        };
        localStorage.setItem('currentUser', JSON.stringify(kCloackCurrentUser));*/

        return kCloackUser;
      }))
  }

  getUser() {
    let userStorage = localStorage.getItem('user');
    if(userStorage) this.user = JSON.parse(userStorage);
    else this.user = localStorage.getItem('userEmail')
    return this.user;
  }
}