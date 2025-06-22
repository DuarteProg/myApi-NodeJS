import { DataSource } from "typeorm";
import { CreateRolesTable1750621854082 } from "./migrations/1750621854082-CreateRolesTable";
import { Role } from "@roles/entities/Role";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./db.sqlite",
  entities: [Role],
  migrations: [CreateRolesTable1750621854082],
});
dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });
