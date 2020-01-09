import { Injectable } from '@angular/core';
import {PersonData} from './person.model';
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from './rest.datasource';
@Injectable()
export class PersonRepository {
    private personData: PersonData[] = [];
    private city: string[] = [];
    constructor(private dataSource: RestDataSource) {
        dataSource.getPersonData().subscribe(data => {
            this.personData = data;
            this.city = data.map(p => p.city)
                .filter((c, index, array) => array.indexOf(c) === index).sort();
        });
    }
    getPersondata(): PersonData[] {
        return this.personData;
    }
    getPersondataByCity(city: string = null): PersonData[] {
        return this.personData
            .filter(p => city == null || city === p.city);
    }
    
}