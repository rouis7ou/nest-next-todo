import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TodoModule } from './todo/todo.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: 'pass123',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true
    }),
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
