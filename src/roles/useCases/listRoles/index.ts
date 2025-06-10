import { RolesRepository } from "@roles/repositoies/RolesRepositoy";
import { ListRolesUseCase } from "./ListRolesUseCase";
import { ListRolesController } from "./ListRolesController";

const rolesRepository = RolesRepository.getInstance();
const listRolesUseCase = new ListRolesUseCase(rolesRepository);
export const listRolesController = new ListRolesController(listRolesUseCase);
