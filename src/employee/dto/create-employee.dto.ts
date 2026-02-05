
import {IsString} from "class-validator"
export class CreateEmployeeDto{
    @IsString()
    Name:string;
     @IsString()
    Email:string;
    
}