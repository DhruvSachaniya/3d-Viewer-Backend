import { Migration } from '@mikro-orm/migrations';

export class Migration20251014173434 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `create table "Test_table" ("id" serial primary key, "Test_Name" varchar null, "Test_Number" int not null);`,
    );
    this.addSql(`comment on table "Test_table" is 'this is only for test';`);

    this.addSql(
      `create table "User" ("id" serial primary key, "username" varchar null, "number" int not null);`,
    );
    this.addSql(`comment on table "User" is 'This is User Table';`);
    this.addSql(
      `alter table "User" add constraint "User_number_key" unique ("number");`,
    );
  }
}
