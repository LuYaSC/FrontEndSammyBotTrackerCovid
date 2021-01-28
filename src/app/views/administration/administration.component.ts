import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Globals } from 'app/globals';
import { AdministrationService } from 'app/services/administration/administration.service';
import { GetUserDto, UserRoleDto } from 'app/services/administration/models/get-user-dto';
import { GetUserResult, UserRolesResult } from 'app/services/administration/models/get-user-result';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.css'],
  providers: [AdministrationService, Globals]
})
export class AdministrationComponent implements OnInit {
  currentDate = new Date();
  listUsers: GetUserResult[] = [];
  message: string;
  showMessageError = false;
  isSuccess = false;
  isLoading = false;
  statusSelected = null;
  dtoGetUsers: GetUserDto = new GetUserDto();
  dtoGetUsersById: GetUserDto = new GetUserDto();
  dtoUserManager: GetUserDto = new GetUserDto();
  total: number;
  closeResult: string;
  messageModal: string;
  isDeletedUser: boolean;
  isQuery: boolean;
  isDoctor: boolean;
  isCreated: boolean;
  passwordUser: string;

  constructor(
    public globals: Globals,
    private administrationService: AdministrationService,
    public dialog: MatDialog,
    private modalService: NgbModal
  ) {
    this.dtoGetUsers.state = '';
    this.isCreated = false;
  }

  ngOnInit(): void {
    this.handleGetUsers();
  }

  handleGetUsers() {
    this.listUsers = [];
    this.isLoading = true;
    this.administrationService.getListUsers(this.dtoGetUsers).subscribe(
      (resp: any) => {
        if (!resp.isOk) {
          this.isSuccess = true;
          this.message = "No se encontró ningun resultado.";
          this.isLoading = false;
          this.listUsers = [];
          return;
        }
        if (resp.body.length <= 0) {
          this.isSuccess = true;
          this.message = "No se encontró ningun resultado.";
          this.isLoading = false;
          this.listUsers = [];
        } else {
          this.isSuccess = false;
          this.listUsers = resp.body;
          this.total = resp.body[0].totalItems;
        }
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  handlepag(): void {
    this.handleGetUsers();
  }

  openManageUser(content, item: GetUserResult, isDeleted: boolean) {
    this.isDeletedUser = isDeleted;
    this.dtoGetUsersById.accessNumber = item.userName;
    this.dtoGetUsersById.userId = item.id;
    this.dtoGetUsersById.state = item.state === 'G' ? 'B' : 'G';
    this.messageModal = !this.isDeletedUser ? '¿Está seguro de ' + (item.state === 'G' ? ' Bloquear' : ' Desbloquear') + ' al usuario '
      + item.userName + '?' : '¿Está seguro de eliminar al usuario ' + item.userName + '?';
    this.modalService.open(content, { size: 'x1', centered: true });
  }

  manageUser() {
    if (this.isDeletedUser) {
      this.administrationService.deleteUser(this.dtoGetUsersById).subscribe((resp: any) => {
        this.isSuccess = true;
        if (!resp.isOk) {
          this.message = 'No se pudo realizar la operación, intente nuevamente';
          return;
        }
        this.message = resp.body;
        this.modalService.dismissAll();
        this.handleGetUsers();
      });
    } else {
      this.administrationService.changeStateUser(this.dtoGetUsersById).subscribe((resp: any) => {
        this.isSuccess = true;
        if (!resp.isOk) {
          this.message = 'No se pudo realizar la operación, intente nuevamente';
          return;
        }
        this.message = resp.body;
        this.modalService.dismissAll();
        this.handleGetUsers();
      });
    }
  }

  openEnableAllUsers(enableAllUsersContent) {
    this.messageModal = '¿Está seguro de que quiere habilitar todos los usuarios de forma masiva? Una vez realizado la operación sera permanente.';
    this.modalService.open(enableAllUsersContent, { size: 'x1', centered: true });
  }

  enableAllUsers() {
    this.administrationService.unlockAllUsers().subscribe((resp: any) => {
      this.isSuccess = true;
      if (!resp.isOk) {
        this.message = 'No se pudo realizar la operacion, intente nuevamente';
        return;
      }
      this.message = resp.body;
      this.modalService.dismissAll();
      this.handleGetUsers();
    });
  }

  checkingRoles(roles: UserRolesResult[]): void {
    this.isQuery = false;
    this.isDoctor = false;
    roles.forEach(x => {
      if (x.roleId === 1) {
        this.isQuery = true;
      }
      if (x.roleId === 3) {
        this.isDoctor = true;
      }
    });
  }

  updateRoles() {
    this.dtoUserManager.roles = [];
    this.dtoUserManager.roles.push(new UserRoleDto({ isDeleted: !this.isQuery, roleId: 1, userId: this.dtoUserManager.userId }));
    this.dtoUserManager.roles.push(new UserRoleDto({ isDeleted: !this.isDoctor, roleId: 3, userId: this.dtoUserManager.userId }));
  }

  openUserDates(userContent, item: GetUserResult = null, type: boolean) {
    debugger;
    if (type) {
      this.isCreated = false;
      this.dtoUserManager.userId = item.id;
      this.dtoUserManager.accessNumber = item.userName;
      this.dtoUserManager.name = item.name;
      this.dtoUserManager.firstLastName = item.firstLastName;
      this.dtoUserManager.secondLastName = item.secondLastName;
      this.dtoUserManager.email = item.email;
      this.dtoUserManager.phoneNumber = item.phoneNumber;
      this.dtoUserManager.notifyUser = false;
      this.checkingRoles(item.userRoles);
    } else {
      this.dtoUserManager = new GetUserDto();
      this.passwordUser = '';
      this.isQuery = false;
      this.isDoctor = false;
      this.isCreated = true;
      this.dtoUserManager.notifyUser = true;
    }
    this.modalService.open(userContent, { size: 'lg', centered: true });
  }

  createUser() {
    debugger;
    this.updateRoles();
    this.dtoUserManager.newPassword = this.passwordUser;
    this.administrationService.createUser(this.dtoUserManager).subscribe((resp: any) => {
      if (!resp.isOk) {
        this.isSuccess = true;
        this.message = "No se pudo crear el usuario, vuelva a intentarlo más tarde";
        this.isLoading = false;
        return;
      }
      this.isSuccess = true;
      this.message = resp.body;
      this.modalService.dismissAll();
      this.handleGetUsers();
      this.isLoading = false;
    });
  }

  modifyUser() {

  }
}
