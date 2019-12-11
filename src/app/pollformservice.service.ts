import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollformserviceService {

  constructor(private http: HttpClient) { }


  uploadfile( fileToUpload: File) {
    const _formData = new FormData();
    _formData.append('file', fileToUpload, fileToUpload.name);
   

    const url = "http://rctestbe.webdunia.info/api/media-communities-service/upload-chunk";

    const request = new HttpRequest('POST', url, _formData, {reportProgress: true });
    return this.http.request(request);
  }

}
