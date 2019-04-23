
import { Component, Inject, OnInit } from '@angular/core';
import { Repository } from '../services/Repository';
import { MoneyModel } from '../models/MoneyModel';

@Component({
  selector: 'adminPanel',
  templateUrl: './staticViews/adminPanel.html',
  styleUrls: ['./styles/adminPanel.css']
})
export class AdminPanel implements OnInit {
  model: MoneyModel = new MoneyModel();
  updateModel: MoneyModel = new MoneyModel();

  constructor(@Inject(Repository) private repo: Repository) {
  }

  ngOnInit() {
    this.repo.getBalance().then(this.updateDate.bind(this));
  }

  adjustValue(element: HTMLInputElement, property:string) {
    let val = element.value || "0";
    let sanitizedValue = /[\d+]+/gi.exec(val);
    this.updateModel[property] = element.value = (sanitizedValue ? parseInt(sanitizedValue[0]).toString() : "0");
  }

  setInventory() { 
    this.repo.setInventory(this.updateModel).then(this.updateDate.bind(this));
  }

  topup() {
    this.repo.topupInventory(this.updateModel).then(this.updateDate.bind(this));
  }

  private updateDate(result: MoneyModel) { 
    let { penny, nickel, dime, quarter } = result;
    this.model = new MoneyModel(penny, nickel, dime, quarter);
    this.updateModel.clear();
  }
}