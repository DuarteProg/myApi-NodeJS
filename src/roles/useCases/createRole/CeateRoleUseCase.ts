import { Role } from "@roles/entities/Role";
import { RolesRepository } from "@roles/repositoies/RolesRepositoy";
import { AppError } from "@shared/errors/AppError";

type createRoleDTO = {
  name: string;
};

export class CreateRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  execute({ name }: createRoleDTO): Role {


    const roleAlreadyExists = this.rolesRepository.findByName(name);
    if (roleAlreadyExists) {
      throw new AppError("Role already exists");
    }

    return this.rolesRepository.create({ name });
  }
}
