import { Role } from "@roles/entities/Role";
import { RolesRepository } from "@roles/repositoies/RolesRepositoy";

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute(): Role[] {
    return this.rolesRepository.findAll();
  }
}
