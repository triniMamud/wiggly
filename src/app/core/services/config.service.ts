import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getHost(): string {
		return environment.baseUrl;
	}

  public getLoginUrl(): string {
		return environment.baseUrl + '/signin';
	}

  public getRegisterUrl(): string {
		return environment.baseUrl + '/signin/register';
	}
}
