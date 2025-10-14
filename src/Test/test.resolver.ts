/* eslint-disable prettier/prettier */
import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  @Query(() => String)
  testQuery(): string {
    return 'Hello, GraphQL!';
  }
}
