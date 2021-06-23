import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BurgerIngredientModule } from './burger-ingredient/burger-ingredient.module';
import { BurgerModule } from './burger/burger.module';
import { IngredientModule } from './ingredient/ingredient.module';
import { OrderBurgerModule } from './order-burger/order-burger.module';
import { UserModule } from './user/user.module';

const TypeOrmConfigProd = {
  prod: {
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  dev: {},
};

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
      ...TypeOrmConfigProd[process.env.STAGE],
    }),
    UserModule,
    BurgerModule,
    IngredientModule,
    BurgerIngredientModule,
    OrderBurgerModule,
  ],
})
export class AppModule {}
