/* eslint-disable prettier/prettier */
import { MikroOrmModuleOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { ConfigService } from '@nestjs/config';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';

export const mikroOrmConfigFactory = (
  configService: ConfigService,
): MikroOrmModuleOptions => ({
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['/src/entity/*.entity.ts'],
  dbName: configService.get<string>('DBNAME'),
  user: 'db_3d_viewer_dev_user',
  password: configService.get<string>('DBPASSWORD'),
  host: configService.get<string>('DBHOST'),
  port: parseInt(configService.get<string>('PORT') || '5432', 10),
  driver: PostgreSqlDriver,
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
  migrations: {
    path: 'dist/migrations',
    pathTs: 'src/migrations',
  },
  driverOptions: {
    connection: {
      ssl: { rejectUnauthorized: false },
    },
  },
});
