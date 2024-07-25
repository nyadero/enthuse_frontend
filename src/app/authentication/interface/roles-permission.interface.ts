import { Permission } from "../enum/permission.enum";
import { Role } from "../enum/roles.enum";

interface RolePermissions {
    [Role.USER]: Permission[];
    [Role.ADMIN]: Permission[];
    [Role.MANAGER]: Permission[];
  }
  
  export const rolePermissions: RolePermissions = {
    [Role.USER]: [],
    [Role.ADMIN]: [Permission.ADMIN_READ, Permission.ADMIN_UPDATE, Permission.ADMIN_DELETE, Permission.ADMIN_CREATE, Permission.MANAGER_READ, Permission.MANAGER_CREATE, Permission.MANAGER_UPDATE, Permission.MANAGER_DELETE],
    [Role.MANAGER]: [Permission.MANAGER_READ, Permission.MANAGER_CREATE, Permission.MANAGER_UPDATE, Permission.MANAGER_DELETE],
  };