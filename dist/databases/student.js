// // import {
// //     BaseEntity,
// //     Column,
// //     Entity,
// //     PrimaryGeneratedColumn,
// //   } from "typeorm";
// //   @Entity("product", { schema: "shopProduction" })
// // export class Student extends BaseEntity{
// //     @PrimaryGeneratedColumn({ type: 'int', name: 'studentId', unsigned: true })
// //     studentId: number;
// //     @Column("varchar",{name:"name"})
// //     name:string;
// //     @Column("int",{name:"age"})
// //     age:number;
// //     @Column("varchar",{name:"school"})
// //     school:string;
// //     @Column("varchar",{name:"class"})
// //     class:string;
// //     @Column("date",{name:"DateOfBirth"})
// //     DateOfBirth:Date;
// // }\
// import {
//     BaseEntity,
//     Column,
//     Entity,
//     Index,
//     JoinColumn,
//     ManyToOne,
//     OneToMany,
//     PrimaryGeneratedColumn,
//   } from "typeorm";
//   export class Product  extends BaseEntity{
//     @PrimaryGeneratedColumn({ type: "bigint", name: "id", unsigned: true })
//     id: number;
//     @Column("varchar", { name: "name", length: 100 })
//     name: string;
//     @Column("text", { name: "description" })
//     description: string;
//     @Column("bigint", { name: "collectionId", unsigned: true })
//     collectionId: number;
//     @Column("bigint", { name: "categoryId", unsigned: true })
//     categoryId: number;
//     @Column("varchar", { name: "userId", length: 255 })
//     userId: string;
//     @Column("decimal", { name: "price", precision: 8, scale: 2 })
//     price: string;
//     @Column("bigint", { name: "sold" })
//     sold: number;
//     @Column("bigint", { name: "quantity" })
//     quantity: number;
//     @Column("bigint", { name: "colorId", unsigned: true })
//     colorId: number;
//     @Column("bigint", { name: "sizeId", unsigned: true })
//     sizeId: number;
//   }
//# sourceMappingURL=student.js.map