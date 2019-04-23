
import { Component, Inject, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'modalWindow',
  templateUrl: './staticViews/modal.html',
  styleUrls: ['./styles/modal.css']
})
export class ModalWindow {
    @HostBinding("class") className: string = "clsHide";
    title: string = "Warning";

    show(): void {
        this.className = "clsShow";
    }

    hide(): void {
        this.className = "clsHide";
    }
}
