import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    Timestamp,
  } from 'typeorm';

@Entity('_TCARolesUsers_WEB')
export class TCAGroupUsersWEB {

    @PrimaryGeneratedColumn()
    Id: number;
  
    @Column({ default: false })
    View: boolean;
  
    @Column({ default: false })
    Edit: boolean;
  
    @Column({ default: false })
    Create: boolean;
  
    @Column({ default: false })
    Delete: boolean;
    
    @Column({ nullable: true })
    MenuId: number;
  
    @Column({ nullable: true })
    GroupId: number;

    @Column({ type: 'nvarchar', length: 100, nullable: true })
    ProjectType: string | null;


}
