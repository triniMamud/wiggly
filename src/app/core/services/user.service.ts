import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ConfigService } from "./config.service";
import { resetPasswordUrl, userAnswersUrl, isFormAnsweredUrl } from "src/app/core/constants/endpoints"
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  public user: any = this.authenticationService.getUser();

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }

  resetPassword(email: string): Observable <any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', email);

    return this.http.post<any>(resetPasswordUrl, null, { headers });
  }

  guardarRespuestas(request: any): Observable <any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);

    return this.http.post<any>(userAnswersUrl, request.request, { headers });
  }

  getIsFormAnswered(): Observable <any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('email', this.user.email);

    return this.http.get<any>(isFormAnsweredUrl, { headers });
  }

}