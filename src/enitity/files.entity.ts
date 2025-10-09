/* eslint-disable prettier/prettier */
import { Entity, PrimaryKey } from '@mikro-orm/core';

@Entity()
export class Files {
  // Define properties and methods for the Files entity here
  @PrimaryKey()
  id!: number;
}
