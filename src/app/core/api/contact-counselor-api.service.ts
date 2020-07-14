import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContactCounselorApiService {
    public url = 'assets/sendMail.aspx';

    constructor(private http: HttpClient) { }

    public sendData(formData: FormData) {
        return this.http.post(this.url, formData).subscribe(
            (response: HttpResponse<any>) => {
                console.log(response.status);
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            });
    }
}