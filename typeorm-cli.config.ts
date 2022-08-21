import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { CoffeeRefactor1660850940802 } from "src/migrations/1660850940802-CoffeeRefactor";
import { SchemaSync1660851304273 } from "src/migrations/1660851304273-SchemaSync";
import { DataSource } from "typeorm";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1660850940802, SchemaSync1660851304273]
})
