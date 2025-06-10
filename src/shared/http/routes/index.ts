import { rolesRouter } from "@roles/http/routes/roles.routes";
import { Router } from "express";

const routes = Router();

routes.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

routes.use("/roles", rolesRouter);

export { routes };
