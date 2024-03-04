import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fireauth: Auth, private router: Router) { }

  login = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(this.fireauth, email, password)
      this.router.navigate(["/"])
      return ""
    } catch (error) {
      this.router.navigate(["/login"])
      return "Incorrect email or password."
    }
  }

  signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(this.fireauth, email, password)
      this.router.navigate(["/login"])
      return ""
    } catch (error) {
      this.router.navigate(["/sign-up"])
      return "Email is invalid or already taken."
    }
  }

  logout = async () => {
    try {
      await this.fireauth.signOut()
      this.router.navigate(["/login"])
    } catch (error) {
      alert(`Login unsuccessful. Err: ${error}`)
    }
  }

  isUserLoggedIn = () => {
    return this.fireauth.currentUser !== null
  }

}
