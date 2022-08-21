import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import Joi from '@hapi/joi';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      //validationSchema: Joi.object({
      //  DATABASE_HOST: Joi.string().required(),
      //  DATABASE_PORT: Joi.number().default(5432),
      //}),
      load: [appConfig]
    }),
    CoffeesModule, 
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DABATASE_PORT,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        autoLoadEntities: true,
        synchronize: true,
      }),
   })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
