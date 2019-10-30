import { Component, OnInit } from '@angular/core';
import { select } from 'd3';

import DATA from './mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  year = 2000;
  width = 960;
  height = 500;
  xAxisProps = {
    key: 'year',
    title: 'Year'
  };
  yAxisProps = {
    key: 'value',
      title: 'lb/acre'
  };
  data = DATA;
  barStroke = (d) => d.selected ? 'red' : '#4682b4';
  barStrokeWidth = (d) => d.selected ? 3 : 1;
  tooltipContent = (d) => `${d.value} lb/acre`;
  mouseOver = (d, idx, rects) => {
    select(rects[idx]).attr('fill', 'brown');
  }
  mouseOut = (d, idx, rects) => {
    select(rects[idx]).attr('fill', '#4682b4');
  }

  ngOnInit() {
    this.updateSelected(this.year);
  }

  increase() {
    this.data = this.data.map(({ year, value, selected }) => ({
      year,
      value: value + 1,
      selected
    }));
  }

  updateSelected(selectedYear) {
    this.year = selectedYear;
    this.data = this.data.map(
      ({ year, value }) => ({
        year,
        value,
        selected: year === selectedYear
      })
    );
  }
}
