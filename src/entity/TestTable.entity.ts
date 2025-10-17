import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({ tableName: 'Test_table', comment: 'this is only for test' })
export class TestTable {
  @PrimaryKey()
  id!: number;

  @Property({ fieldName: 'Test_Name', length: -1, nullable: true })
  TestName?: string;

  @Property({ fieldName: 'Test_Number' })
  TestNumber!: number;
}
