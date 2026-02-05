import { Body, Controller ,Get, Post} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
@Controller('employee')
export class EmployeeController {
 constructor(private readonly employeeService:EmployeeService)
 {
  
 }
    @Get()
    getEmployee(){
      return this.employeeService.getAllEmployeeData()
        return "zubair world"
    }
   @Post()
    addEmployee(@Body() createEmployeeDto:CreateEmployeeDto)
    {
      return this.employeeService.createEmployee(createEmployeeDto)
    }

}
