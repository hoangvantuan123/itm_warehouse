import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    Timestamp,
  } from 'typeorm';

@Entity('_TCAGroups_WEB')
export class TCAGroupsWEB {

    @PrimaryGeneratedColumn()
    Id: number;
  
    @Column({ nullable: false })
    Name: string;
    
    @Column({ type: 'nvarchar', length: 100, nullable: true })
    ProjectType: string | null;
}
