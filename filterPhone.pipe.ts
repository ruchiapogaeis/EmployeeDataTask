import { Pipe } from "@angular/core";
@Pipe({
    name: "filterno"
})
export class FilterPhonePipe {
    transform(value: any) {
        let value1 : string = "";        
        if(Number(value)){            
            value1 = value;
        }else{
            value1 = "NA";
        }
        return value1;    
    }
}