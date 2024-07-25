
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UserInterface } from '../interface/user';
import { AuthenticationService } from 'src/app/authentication/service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private authService: AuthenticationService,
     private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Check if the user is authenticated
    if (!this.authService.isAuthenticated()) {
      // Redirect to the login page (or any other page)
      return this.router.navigate(['/auth']);
    }

    // Get user details from local storage
    const user: UserInterface = JSON.parse(localStorage.getItem('enthuze_user') || '{}');

    // Check for roles and permissions
    const requiredRoles = next.data['roles'] as string[];
    const requiredPermissions = next.data['permissions'] as string[];

    // If roles are required, check if the user has them
    if (requiredRoles && requiredRoles.length > 0) {
      const userRoles = user.role; //  UserInterface
      console.log({userRoles});
      const hasRequiredRoles = requiredRoles.every(role => userRoles.includes(role));

      

      if (!hasRequiredRoles) {
        // Redirect or handle unauthorized access
        return this.router.navigate(['/']);
      }
    }

    // If permissions are required, check if the user has them
    if (requiredPermissions && requiredPermissions.length > 0) {
      const userPermissions = user.permissionList || []; 
      console.log(userPermissions);
      console.log(requiredPermissions);
      
      
      // const hasRequiredPermissions = requiredPermissions.every(permission => userPermissions);
      const hasRequiredPermissions = requiredPermissions.every(permission => userPermissions.includes(permission));

      console.log({hasRequiredPermissions});
      

      if (!hasRequiredPermissions) {
        return this.router.navigate(['/']);
        // return false;
      }
    }

    // Allow access to the route
    return true;
  }
}