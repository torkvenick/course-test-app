export class AuthService {
  loggedIn = false;

  login() {
    this.loggedIn = true;
  }

  loggedOut() {
    this.loggedIn = false;
  }

  isAuthenticated() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
  }
}
