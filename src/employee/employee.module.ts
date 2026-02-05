import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { employee } from '../entities/user.entity';
import { EmployeeController } from './employee.controller';
import{MongooseModule} from '@nestjs/mongoose'

@Module({
   imports: [TypeOrmModule.forFeature([employee])],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
