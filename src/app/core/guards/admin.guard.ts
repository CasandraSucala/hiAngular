import {CanActivateFn, CanMatchFn, Router} from "@angular/router";
import {inject} from "@angular/core";


export const canLoadCarsModule: CanMatchFn = () => {
  const role = localStorage.getItem('role');

  if (role === 'admin') {
    return true;
  }

  const router = inject(Router);
  router.navigateByUrl('/pipes');

  return false;
}

export const canChangeTitle: CanActivateFn = () => {
  return localStorage.getItem('role') === 'admin';
}




