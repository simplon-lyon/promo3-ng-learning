import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ChienService } from './chien/chien.service';

import 'rxjs/add/operator/map';
@Injectable()
export class ChienGuard implements CanActivate {

  constructor(private chienService: ChienService,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (next.params.id % 2 === 0) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
