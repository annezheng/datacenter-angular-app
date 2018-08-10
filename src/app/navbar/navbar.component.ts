import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // styleUrls: ['./navbar.component.css'],
  // styles: [`.btn { background-color: #999999; }`],
  // encapsulation: ViewEncapsulation.None // also change other buttons background-color
  // encapsulation: ViewEncapsulation.Emulated // only change nav button, default value
  // encapsulation: ViewEncapsulation.Native // not apply css, use shadowDOM
})
export class NavbarComponent {
  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  constructor(private modalService: NgbModal) {}

  refresh() {
    this.onRefresh.emit();
  }

  open() {
    const modal = this.modalService.open(AboutComponent);
    // modal.componentInstance.node = node;
  }
}
