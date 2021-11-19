import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

import { DBTaskService } from '../../services/dbtask/dbtask.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../../services/authentication/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  login: any={
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Usuario:'',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Password: '',

    repetirPassword: ''
  };

  field='';

  constructor(
              public toastController: ToastController,
              public dbtaskService: DBTaskService,
              public alertController: AlertController,
              private router: Router,
              private storage: Storage,
              public authenticationService: AuthenticationService) {}


  ngOnInit() {
  }


  registrar(){
    // eslint-disable-next-line eqeqeq
    if (this.login.Password == this.login.repetirPassword) {
      if(this.login.Password.length < 4 || this.login.Password.length > 4){
        this.presentToast('La contraseña debe tener 4 caracteres de largo.');
      } else {
        this.createSessionData(this.login);
      }
    } else {
      this.presentToast('Las contraseñas no son idénticas.');
    }
  }

  createSessionData(login: any) {
    if(this.validateModel(login)){
      // eslint-disable-next-line prefer-const
      let copy = Object.assign({},login);
      copy.Active=1;
      this.dbtaskService.createSessionData(copy)
      .then((data)=>{
        this.presentToast('Usuario Registrado. Puede iniciar sesión.');
        this.storage.set('USER_DATA',data);
        // this.router.navigate(['home']);
      })
      .catch((error)=>{
        this.presentToast('El usuario ya existe');
      });
    }
    else{
      this.presentToast('Falta: '+this.field);
    }
  }


  validateModel(model: any){

    // eslint-disable-next-line no-var
    for (var [key, value] of Object.entries(model)) {

      // eslint-disable-next-line eqeqeq
      if (value=='') {
        this.field=key;
        return false;
      }
    }
    return true;
  }

  validatePassword() {
    // eslint-disable-next-line eqeqeq
    if(this.login.Password == this.login.repetirPassword){
      return true;
    } else {
      return false;
    }
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastController.create(
      {
        message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }




}
