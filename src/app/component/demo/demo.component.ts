import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  @Input()
  count = 0;

  @Output()
  countChange = new EventEmitter<number>()

  @Output()
  change: EventEmitter<string> = new EventEmitter();
  
  increase(){
    this.count++;
    this.countChange.emit(this.count);
    this.change.emit(`Count increased form ${this.count -1} to ${this.count}` );

  }
  decrease(){
    this.count--;
    this.countChange.emit(this.count);
    this.change.emit(`Count decreased form ${this.count +1} to ${this.count}` );

  }
}
