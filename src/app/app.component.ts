import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { getObject } from '@syncfusion/ej2-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Object[];

  ngOnInit(): void {
    this.data = sampleData;
  }

  customAggregateFn(data: Object): number {
    let sampleData: Object[] = getObject('result', data);
    let count: number = 0;
    sampleData.filter((item: Object) => {
      let itemValue: string = getObject('taskName', item);
      if (itemValue === 'Testing') {
        count++;
      }
    });
    return count;
  }
}
