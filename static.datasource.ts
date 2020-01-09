import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import {PersonData} from './person.model';

@Injectable()
export class StaticDataSource {
    private personData: PersonData[] = [
            new PersonData(1, 'jhon', '9999999999', 'pune', 'ABC road', 'XYZ building',12455),
            new PersonData(2, 'jacob', 'AZ99A99PQ9', 'pune', 'PQR road', 'ABC building',19455),
            new PersonData(3, 'Ari', '14548522', 'mumbai', 'ABC road', 'XYZ building',25431),
        ];
        getPersonData(): Observable<PersonData[]> {
            return from([this.personData]);
        }  
}
