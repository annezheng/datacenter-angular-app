/* method 1 - using local variable with method 1 in html
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
} */

// method 2 - using ViewChild with method 2 in html
import { Component, ViewChild, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;

  alertRef: ComponentRef<AlertComponent>;
  @ViewChild('alertBox', {read: ViewContainerRef}) alertBox: ViewContainerRef;

  constructor(private ComponentFactoryResolver: ComponentFactoryResolver) {};

  alert(date) {
    if (!this.alertRef) {
      const alertComponent = this.ComponentFactoryResolver.resolveComponentFactory(AlertComponent);
      this.alertRef = this.alertBox.createComponent(alertComponent);
    }
    this.alertRef.instance.date = date;
    this.alertRef.changeDetectorRef.detectChanges();
    setTimeout(() => this.destroyAlert(), 5000);
  }

  destroyAlert() {
    if (this.alertRef) {
      this.alertRef.destroy();
      delete this.alertRef;
    }
  }

  refresh() {
    this.dashboard.generateData();
  }
}
