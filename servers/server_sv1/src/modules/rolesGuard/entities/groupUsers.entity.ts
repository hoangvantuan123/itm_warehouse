import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    Timestamp,
  } from 'typeorm';

@Entity('_TCAGroupUsers_WEB')
export class TCAGroupUsersWEB {

    @PrimaryGeneratedColumn()
    Id: number;
  
    @Column({ nullable: false })
    Name: string;
   
    @Column({ type: 'int', nullable: true })
    EmpSeq: number | null;

    @Column({ type: 'int' })
    UserSeq: number;

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    UserId: string | null;

    @Column({ nullable: true })
    GroupId: number;

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    ProjectType: string | null;

}
