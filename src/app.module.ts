import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './resources/test/test.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mssql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false
  }), TestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
