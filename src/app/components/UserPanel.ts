
import { Component, Inject, ViewChild } from '@angular/core';
import { Repository } from '../services/Repository';
import { MoneyModel } from '../models/MoneyModel';
import { ModalWindow } from './ModalWindow';

@Component({
  selector: 'userPanel',
  templateUrl: './staticViews/userPanel.html',
  styleUrls: ['./styles/userPanel.css']
})
export class UserPanel {
  @ViewChild(ModalWindow) modal: ModalWindow;
  alert: string= "";
  model: MoneyModel = new MoneyModel();
  constructor(@Inject(Repository) private repo: Repository) {
  }

  billInserted(value) {
    this.repo.billInserted(value).then((result) => {
      if (!result.success) {
        //alert(result.errorMessage);
        this.alert = result.errorMessage;
        this.modal.show();
        this.model.clear();
      } else {
        let { penny, nickel, dime, quarter } = result.data;
        this.model = new MoneyModel(penny, nickel, dime, quarter);
      }
    })
  }

  approved() {
    this.repo.approved(this.model).then(() => {
      this.model.clear();
    });
  }

}
