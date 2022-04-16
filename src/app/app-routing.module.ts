import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';

export class AuthGuard implements CanActivate {
  canActivate() {
    return true;
  }
}

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
