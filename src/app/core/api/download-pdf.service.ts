import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DownloadPdfService {
    constructor(private http: HttpClient) { }

    // downloadPDF(): any {
    //     const options = {responseType: ResponseContentType.Blob};
    //     return this.http.get('/sites/default/files/Disaster%20Survivor%27s%20Toolkit.pdf', options)
    //         .map((res) => {
    //             return new Blob([res.blob()], { type: 'application/pdf' });
    //         });
    // }
}