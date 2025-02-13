import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { GenericApi } from './shared/generic.api';
import { ApiUrls } from 'src/app/config/constants';

@Injectable()
export class CommonApi extends GenericApi {

    constructor(http: HttpClient) {
        super(http);
    }
    
    postData(url: any, data: any) {
        return this.post(environment.baseUrl + url, data);
    }
    
    putData(url: any, data: any) {
    return this.put(environment.baseUrl + url, data);
    }

}
