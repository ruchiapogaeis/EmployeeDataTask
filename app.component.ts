
import { Component } from "@angular/core";
import {PersonData} from './person.model';
import { PersonRepository } from './person.repository';
import { Observable, from } from 'rxjs';

@Component({
    selector: "todo-app",
    templateUrl: "app.component.html"
})

export class AppComponent {
    constructor(private repository: PersonRepository) { }
    
    city1 : string = "pune";      
    
    get persondata(): PersonData[] {    
        return this.repository.getPersondata();
    }
    
    getpersondataBycity(city){
        this.city1 = city;        
        return this.repository.getPersondataByCity(city);        
    }
}