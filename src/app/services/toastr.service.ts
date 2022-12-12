import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class Toastr {

  constructor(private toastService: ToastrService) { }

  public showSuccess(msg: string) {
    this.toastService.success(msg);
  }

  public showError(msg: string) {
    this.toastService.error(msg);
  }

}
