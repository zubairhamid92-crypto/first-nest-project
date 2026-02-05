import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class employee {
  @PrimaryGeneratedColumn()
  Employee_ID  : number;

  @Column()
  Name: string;

  @Column()
  Email: string;

  
}
