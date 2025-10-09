/* eslint-disable prettier/prettier */
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { ConfigService } from '@nestjs/config';

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export const mikroOrmConfigFactory = (
  configService: ConfigService,
): MikroOrmModuleOptions => {
  console.log('✅ MikroORM is using these values:');
  console.log('DBNAME:', configService.get<string>('DBNAME'));
  console.log('USERNAME:', configService.get<string>('USERNAME'));
  console.log('DBPASSWORD:', configService.get<string>('DBPASSWORD'));
  console.log('DBHOST:', configService.get<string>('DBHOST'));
  console.log('PORT:', configService.get<string>('PORT'));

  return {
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/entity/*.entity.ts'],
    dbName: configService.get<string>('DBNAME'),
    user: configService.get<string>('USERNAME'),
    password: configService.get<string>('DBPASSWORD'),
    host: configService.get<string>('DBHOST'),
    port: parseInt(configService.get<string>('PORT') || '5432', 10),
    driver: PostgreSqlDriver,
    debug: true,
    migrations: {
      path: 'dist/migrations',
      pathTs: 'src/migrations',
    },
    pool: {
      min: 1,
      max: 10,
    },
  };
};
