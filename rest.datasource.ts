import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PersonData} from './person.model';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
const PROTOCOL = 'http';
const PORT = 3500;
@Injectable()
export class RestDataSource {
    baseUrl: string;
    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    getPersonData(): Observable<PersonData[]> {
        return this.http.get<PersonData[]>(this.baseUrl + 'persondata');
    }   
}
