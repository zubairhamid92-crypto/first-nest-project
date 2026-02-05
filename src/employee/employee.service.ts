import { Injectable } from '@nestjs/common';
import { Employee } from './interfaces/customer.interface';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { employee } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
   @InjectRepository(employee)
    private employeeRepository: Repository<employee> ,
  ) {}
   
    private employeList=[
      {id:1, name:"zubair"}, 
      {id:2, name:"zafar"},
      {id:3, name:"UMER"},
    ]
    getAllEmployeeData(){ 
      return this.employeList
    }
 
// addEmployee(CreateEmployeeDto:CreateEmployeeDto):Employee
// {
//   const newEmployee:Employee={
//     id:Date.now(),
//     ...CreateEmployeeDto,
//   }
//   this.employeList.push(newEmployee)
//   return newEmployee
// }
 async createEmployee(
 dto: CreateEmployeeDto
): Promise<employee> {

  const user = this.employeeRepository.create(dto);
  return await this.employeeRepository.save(user);
  }

}
