import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class RedirectService {
    public url = environment.apiUrl;

    constructor() { }

    public loginNow(): void {
        window.open(this.url + 'Account/AttorneyRegistration.aspx');
    }
}