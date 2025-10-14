import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'User', comment: 'This is User Table' })
export class User {

  @PrimaryKey()
  id!: number;

  @Property({ length: -1, nullable: true })
  username?: string;

  @Property({ unique: 'User_number_key' })
  number!: number;

}
