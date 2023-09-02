import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "./config.service";
import { resetPasswordUrl } from "src/app/core/constants/endpoints"

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  resetPassword(email: string): Observable <any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', email);

    return this.http.post<any>(resetPasswordUrl, null, { headers });
  }

}