import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { SignUpComponent } from './core/auth/pages/sign-up/sign-up.component';
import { AuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard'
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProtectedComponent } from './pages/protected/protected.component';
import { HomeComponent } from './pages/home/home.component';

const redirectUnauthorizedToLoginPage = () => redirectUnauthorizedTo(['login']); // prevent unauthorized users to view pages
const redirectLoggedInToHome = () => redirectLoggedInTo(['/']); // prevent logged in user to view login-sign-up pages

export const routes: Routes = [
  { path: "login", component: LoginComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectLoggedInToHome } },
  { path: "sign-up", component: SignUpComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectLoggedInToHome } },
  { path: "protected", component: ProtectedComponent, canActivate: [AuthGuard], data: { authGuardPipe: redirectUnauthorizedToLoginPage } },
  { path: "", pathMatch: "full", component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];
