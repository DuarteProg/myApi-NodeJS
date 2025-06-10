import { RolesRepository } from "@roles/repositoies/RolesRepositoy";
import { CreateRoleUseCase } from "./CeateRoleUseCase";
import { CreateRoleController } from "./CreateRoleController";

const rolesRepository = RolesRepository.getInstance();
const createRoleUseCase = new CreateRoleUseCase(rolesRepository);
export const createRolesController = new CreateRoleController(createRoleUseCase);
