import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// not using setter and getter 
// using ng-content in html
// using change detection
export class MetricComponent implements OnChanges{  
  @Input('used') value: number = 0;    
  @Input('available') max: number = 100;

  ngOnChanges(changes) {
    if (changes.value && isNaN(changes.value.currentValue)) {
      this.value = 0;
    }
    if (changes.max && isNaN(changes.max.currentValue)) {
      this.max = 0;
    }
  }
  
  isDanger() {
    return this.value / this.max > 0.7;
  }
} 


/* No 3.
// using setter and getter and 
// using ng-content in html
export class MetricComponent {
  private _value: number = 0;
  private _max: number = 100;

  @Input('used') 
  set value(value: number){
    if (isNaN(value)) {
      value = 0;
    }
    this._value = value;
  }
  get value(): number { return this._value; }
  
  @Input('available')
  set max(max: number){
    if (isNaN(max)) {
      max = 0;
    }
    this._max = max;
  }
  get max(): number { return this._max; }

  isDanger() {
    return this.value / this.max > 0.7;
  }
} 
*/

/* No. 2
// using setter and getter 
// not using ng-content in html
export class MetricComponent {  
  @Input() title: string = '';
  @Input() description: string = '';
  private _value: number = 0;
  private _max: number = 100;

  @Input('used') 
  set value(value: number){
    if (isNaN(value)) {
      value = 0;
    }
    this._value = value;
  }
  get value(): number { return this._value; }
  
  @Input('available')
  set max(max: number){
    if (isNaN(max)) {
      max = 0;
    }
    this._max = max;
  }
  get max(): number { return this._max; }

  isDanger() {
    return this.value / this.max > 0.7;
  }
} */

/* No 1
// not using setter and getter 
// not using ng-content in html
export class MetricComponent {  
  @Input() title: string = '';
  @Input() description: string = '';
  @Input('used') value: number = 0;   
  @Input('available') max: number = 100;
  
  isDanger() {
    return this.value / this.max > 0.7;
  }
} */

