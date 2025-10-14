/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { mikroOrmConfigFactory } from '../mikro-orm.factory';
import { join } from 'path';
import { TestResolver } from './Test/test.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    // NestJS runtime config
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: mikroOrmConfigFactory,
      inject: [ConfigService],
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
  providers: [TestResolver],
})
export class AppModule {}
