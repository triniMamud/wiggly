import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
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

  login(email: string, password: string) {

    const body = new HttpParams()
      //.set('grant_type', 'password')
      .set('email', email)
      .set('password', password);

    return this.http.get<any>(this.configService.getLoginUrl(), {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('email', email)
        .set('password', password)
    })
      .pipe(map((res) => {
        //let decoded: TokenDecode = <TokenDecode>jwt_decode(res?.data?.token);

        let user = res?.data?.user;
        const kCloackUser: any = {
          name: user?.name,
          email: user?.email,
          //empresa:user?.empresa,
          //rolId: user?.role_id,
          //rolDescripcion: user?.role_name,
          id: user?._id,
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
    return this.user;
  }
}