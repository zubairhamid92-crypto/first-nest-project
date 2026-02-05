import { Module } from '@nestjs/common';
import { ProductService } from './product/product.service';
 
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
 

@Module({
  controllers: [ProductController],
  providers: [ProductService],
 // imports: [EmployeeModule,  MongooseModule.forRoot('mongodb://localhost:27017/TestDb'),],
  
  imports: [EmployeeModule, TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',  // replace with DB host
      port: 3306,         // default MySQL port
      username: 'root',   // your MySQL username
      password: '', // your MySQL password
      database: 'umer_migrated_cms_db',   // your database name
      autoLoadEntities: true, // automatically load entities
      synchronize: true,   // ❗ auto creates tables (only in dev, not in prod)
    }),],
   
  
 
})
export class AppModule {}
