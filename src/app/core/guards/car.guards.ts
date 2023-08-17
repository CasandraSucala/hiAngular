import {CanActivateFn, CanMatchFn, Router} from "@angular/router";
import {inject} from "@angular/core";

const isAdmin = false;

export const canActivateCars: CanActivateFn = () => {
  if(isAdmin) return true;

  return false;
}

export const canLoadCars: CanMatchFn = () => {
  if(localStorage.getItem('role') === 'admin') return true;

  const router = inject(Router);
  router.navigateByUrl('/data-binding');
  return false;
}
