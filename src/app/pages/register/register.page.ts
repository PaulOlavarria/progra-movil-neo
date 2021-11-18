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

    RepetirPassword: ''
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
    this.createSessionData(this.login);
  }

  createSessionData(login: any) {
    if(this.validateModel(login)){
      // eslint-disable-next-line prefer-const
      let copy = Object.assign({},login);
      copy.Active=1;
      this.dbtaskService.createSessionData(copy)
      .then((data)=>{
        this.presentToast('Registrado correctamente!!, Inicie sesion');
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
