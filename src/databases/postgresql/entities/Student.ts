import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("student", { schema: "student" })
export class Student extends BaseEntity{
  @Column("varchar", { name: "name", nullable: true, length: 20 })
  name: string | null;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @Column("varchar", { name: "className", nullable: true, length: 10 })
  className: string | null;

  @Column("varchar", { name: "school", nullable: true, length: 20 })
  school: string | null;

  @Column("date", { name: "DateOfBirth", nullable: true })
  dateOfBirth: string | null;

  @PrimaryGeneratedColumn({ type: "int", name: "studentId" })
  studentId: number;
}
