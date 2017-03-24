import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class DateInfoService {

    constructor(private http: Http) { }



    getDateInfo(day:string, month:string){
        return this.http.get("http://numbersapi.com/" + month + "/" + day + "/date")
            .map(this.extractData)
            .catch(this.handleError);
    }

    getYearInfo(year: string): Observable<string> {
        return this.http.get("http://numbersapi.com/" + year + "/year")
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.text();
    }
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}