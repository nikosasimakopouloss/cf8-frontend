import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { IRole } from '../interfaces/user';

export const adminRoleGuard: CanActivateFn = (route, state) => {

const userService = inject(UserService);
  const router = inject(Router);

  const userRoles: IRole[] | undefined = userService.user()?.roles;
  const hasPermision = userRoles?.some((r:IRole) => r.role==="ADMIN" && r.active);

  if (userService.user() && hasPermision) {





  return true;
}

return router.navigate(['welcome']);
};
