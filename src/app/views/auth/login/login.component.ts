import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../services/auth/auth.service";
import { User } from "../../../services/auth/models/user";
import { Globals } from "../../../globals";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [Globals],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  isError = false;
  message = "";
  loading = false;
  loginInvalid = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    public globals: Globals
  ) {
    localStorage.removeItem("doctorName");
    localStorage.removeItem("doctorLastName");
  }

  ngOnInit(): void {}

  onLogin() {
    if (this.user.name === "" || this.user.password === "") {
      this.loginInvalid = true;
      return;
    }
    /*this.user.name = 'COV001';
    this.user.password = 'pato123AB';*/
    this.loading = true;
    this.loginInvalid = false;
    this.authService.login(this.user).subscribe(
      (res: any) => {
        this.loading = false;
        this.globals.roles = this.authService.getRoles();
        if (localStorage.getItem("ROLES").includes("CONSULTOR")) {
          this.router.navigate(["/new-map"]);
        } else {
          this.router.navigate(["/my-cases"]);
        }
      },
      (error) => {
        this.loading = false;
        this.loginInvalid = true;
        this.message = error.error.error_description;
      }
    );
  }
}
