/* eslint-disable prettier/prettier */
import { defineConfig } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import 'dotenv/config';

export default defineConfig({
  entities: ['dist/**/*.entity.js'],
  entitiesTs: ['src/entity/*.entity.ts'],
  dbName: process.env.DBNAME,
  user: 'db_3d_viewer_dev_user',
  password: process.env.DBPASSWORD,
  host: process.env.DBHOST,
  port: parseInt(process.env.PORT || '5432', 10),
  metadataProvider: TsMorphMetadataProvider,
  debug: true,
  driverOptions: {
    connection: { ssl: { rejectUnauthorized: false } },
  },
});
