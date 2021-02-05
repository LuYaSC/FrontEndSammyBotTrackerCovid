import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from "../../services/auth/auth.service";
import { Router } from "@angular/router";
import { Globals } from "../../globals";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  roles: string[];
}

export let ROUTES: RouteInfo[] = [
  {
    path: "/new-map",
    title: "Mapa en Vivo",
    icon: "location_on",
    class: "",
    roles: ["CONSULTOR"],
  },
  {
    path: "/administration",
    title: "Módulo de usuarios",
    icon: "person",
    class: "",
    roles: ["CONSULTOR"],
  },
  {
    path: "/my-cases",
    title: "Mis casos",
    icon: "dashboard",
    class: "",
    roles: ["MEDICO", "INTERNO"],
  },
  {
    path: "/data-seet",
    title: "Seguimiento Persona",
    icon: "person",
    class: "",
    roles: ["CONSULTOR"],
  },
  {
    path: "/case-in-await",
    title: "Casos en Espera",
    icon: "person",
    class: "",
    roles: ["MEDICO", "INTERNO"],
  },
  
  /*{
    path: "/recover-case",
    title: "Recuperacion de Casos",
    icon: "person",
    class: "",
    roles: ["INTERNO"],
  },*/
  // {
  //   path: "/captured-case",
  //   title: "Captacion  de asos",
  //   icon: "person",
  //   class: "",
  //   roles: ["INTERNO"],
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
  providers: [Globals],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    private router: Router,
    private authService: AuthService,
    public globals: Globals
  ) {}

  ngOnInit() {
    let routes: RouteInfo[] = [];
    ROUTES = [
      {
        path: "/new-map",
        title: "Mapa en Vivo",
        icon: "location_on",
        class: "",
        roles: ["CONSULTOR"],
      },
      {
        path: "/administration",
        title: "Módulo de usuarios",
        icon: "person",
        class: "",
        roles: ["CONSULTOR"],
      },
      {
        path: "/my-cases",
        title: "Mis casos",
        icon: "dashboard",
        class: "",
        roles: ["MEDICO", "INTERNO"],
      },
      {
        path: "/data-seet",
        title: "Seguimiento Persona",
        icon: "person",
        class: "",
        roles: ["CONSULTOR"],
      },
      {
        path: "/case-in-await",
        title: "Casos en Espera",
        icon: "person",
        class: "",
        roles: ["MEDICO", "INTERNO"],
      },
      /*{
        path: "/recover-case",
        title: "Recuperacion de Casos",
        icon: "person",
        class: "",
        roles: ["INTERNO"],
      },*/
      // {
      //   path: "/captured-case",
      //   title: "Casos Captados",
      //   icon: "person",
      //   class: "",
      //   roles: ["INTERNO"],
      // },
    ];
    ROUTES.forEach((value, index) => {
      const hasPermission = this.globals.verifyPermission(value.roles);
      if (hasPermission === true) {
        routes.push(value);
      }
    });
    ROUTES = routes;
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  isMobileMenu() {
    /*if ($(window).width() > 991) {
          return false;
      }*/
    return true;
  }

  logout() {
    this.globals.roles = [];
    this.authService.logout();
    this.router.navigate(["/auth/login"]);
  }
}
