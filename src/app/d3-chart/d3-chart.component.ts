import { Component, OnInit, OnChanges, Input } from '@angular/core';

import {
  axisBottom,
  axisLeft,
  event,
  max,
  scaleBand,
  scaleLinear,
  select,
  ScaleLinear,
  Selection
} from 'd3';

@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.css']
})
export class D3ChartComponent<T> implements OnInit, OnChanges {

  constructor() {
  }
  private chartProps: {
    g: Selection<SVGGElement>;
    x: ScaleLinear;
    y: ScaleLinear;
    xAxisGroup: Selection<SVGGElement>;
    yAxisGroup: Selection<SVGGElement>;
    tooltip: Selection<HTMLElement>;
  };
  @Input() width: number;
  @Input() height: number;
  @Input() marginTop = 50;
  @Input() marginRight = 20;
  @Input() marginBottom = 40;
  @Input() marginLeft = 60;
  @Input() xAxisProps: {
    key: string | number;
    title: string;
    stroke: string;
    strokeWidth: number;
    textColor: string;
    textOpacity: number;
  };
  @Input() yAxisProps: {
    key: string | number;
    title: string;
    stroke: string;
    strokeWidth: number;
    textColor: string;
    textOpacity: number;
  };
  @Input() barStroke: (d: T) => string | string;
  @Input() barStrokeWidth: (d: T) => number | number;
  @Input() barStrokeOpacity: (d: T) => number | number;
  @Input() barFill: (d: T) => string | string;
  @Input() barFillOpacity: (d: T) => number | number;
  @Input() tooltipContent: (d: T) => string | string;
  @Input() data: Array<T>;
  @Input() mouseOver: (d: T, idx: number, rects: []) => void = () => {};
  @Input() mouseOut: (d: T, idx: number, rects: []) => void = () => {};
  @Input() click: (d: T, idx: number, rects: []) => void = () => {};

  ngOnInit() {
    this.createChart();
  }

  ngOnChanges() {
    if (this.chartProps) {
      this.updateData();
    }
  }

  updateData() {
    {
      const {
        data,
        xAxisProps,
        yAxisProps,
        marginTop,
        marginBottom,
        height,
        barStroke = '#4682b4',
        barStrokeWidth = 1,
        barStrokeOpacity = 0.3,
        barFill = '#4682b4',
        barFillOpacity = 0.3,
        tooltipContent,
        mouseOver,
        mouseOut,
        click
      } = this;

      const {
        g,
        x,
        y,
        xAxisGroup,
        yAxisGroup,
        tooltip
      } = this.chartProps;

      x.domain(data.map((d) => d[xAxisProps.key]));
      y.domain([0, max(data, (d) => +d[yAxisProps.key])]);

      // X Axis
      const xAxis = axisBottom(x);
      xAxisGroup
        .call(xAxis)
        .selectAll('text')
        .attr('x', -25)
        .attr('y', -5)
        .attr('transform', 'rotate(-90)')
        .attr('fill', xAxisProps.textColor || 'currentColor')
        .attr('fill-opacity', xAxisProps.textOpacity || 0.3);
      xAxisGroup
        .selectAll('line,path')
        .style('stroke', xAxisProps.stroke || 'currentColor')
        .attr('stroke-width', xAxisProps.strokeWidth || 1);

      // Y Axis
      const yAxis = axisLeft(y);
      yAxisGroup
        .transition()
        .duration(500)
        .call(yAxis);
      yAxisGroup
        .selectAll('text')
        .attr('fill', yAxisProps.textColor || 'currentColor')
        .attr('fill-opacity', yAxisProps.textOpacity || 0.3);
      yAxisGroup
        .selectAll('line,path')
        .attr('stroke', yAxisProps.stroke || 'currentColor')
        .attr('stroke-width', yAxisProps.strokeWidth || 1);

      // Data join
      const bars = g.selectAll('rect')
        .data(data);

      // Exit
      bars.exit()
        .transition()
        .duration(500)
        .attr('y', y(0))
        .attr('height', 0)
        .remove();

      // Enter
      bars
        .enter()
        .append('rect')
        .attr('x', (d) => x(d[xAxisProps.key]))
        .attr('width', x.bandwidth)
        .attr('y', y(0))
        .attr('height', 0)
        .on('mouseover', mouseOver)
        .on('mouseout', mouseOut)
        .on('click', click)
        .on('mouseover', (d) => {
          if (tooltip) {
            tooltip
              .html(typeof tooltipContent === 'function' ? tooltipContent(d) : tooltipContent)
              .transition()
              .duration(200)
              .style('opacity', .9)
              .style('left', `${event.clientX}px`)
              .style('top', `${event.clientY - 50}px`);
          }
        })
        .on('mouseout', () => {
          if (tooltip) {
            tooltip
              .transition()
              .duration(500)
              .style('opacity', 0);
          }
        })
        .merge(bars)
        .transition()
        .duration(500)
        .attr('y', (d) => y(+d[yAxisProps.key]))
        .attr('x', (d) => x(d[xAxisProps.key]))
        .attr('width', x.bandwidth)
        .attr('height', (d) => (height - marginBottom - marginTop) - y(d[yAxisProps.key]))
        .attr('stroke', barStroke)
        .attr('stroke-width', barStrokeWidth)
        .attr('stroke-opacity', barStrokeOpacity)
        .attr('fill', barFill)
        .attr('fill-opacity', barFillOpacity);
    }
  }

  createChart() {
    const {
      marginTop,
      marginBottom,
      marginLeft,
      marginRight,
      width,
      height,
      xAxisProps,
      yAxisProps,
      tooltipContent
    } = this;

    const svg = select('svg');

    const g = svg.append('g')
      .attr('width', width - marginLeft - marginRight)
      .attr('height', height - marginBottom - marginTop + 40)
      .attr('transform', `translate(${marginLeft},${marginTop})`);

    const xAxisGroup = g.append('g')
      .attr('class', 'xAxis')
      .attr('transform', `translate(0, ${height - marginBottom - marginTop})`);

    const yAxisGroup = g.append('g')
      .attr('class', 'yAxis');

    // X Scale
    const x = scaleBand()
      .range([0, width - marginLeft - marginRight])
      .paddingInner(0.1)
      .paddingOuter(0.3);

    if (xAxisProps.title) {
      g.append('text')
        .attr('x', (width - marginLeft - marginRight) / 2)
        .attr('y', height - marginTop - marginBottom + 50)
        .attr('text-anchor', 'middle')
        .attr('fill', xAxisProps.textColor || 'currentColor')
        .attr('fill-opacity', xAxisProps.textOpacity || 0.3)
        .text(xAxisProps.title);
    }

    // Y Scale
    const y = scaleLinear()
      .range([height - marginBottom - marginTop, 0]);

    if (yAxisProps.title) {
      g.append('text')
        .attr('x', -(height - marginBottom - marginTop) / 2)
        .attr('y', -30)
        .attr('text-anchor', 'middle')
        .attr('transform', 'rotate(-90)')
        .attr('fill', yAxisProps.textColor || 'currentColor')
        .attr('fill-opacity', yAxisProps.textOpacity || 0.3)
        .text(yAxisProps.title);
    }

    const tooltip = tooltipContent ?
      select('#Tooltip')
        .attr('class', 'tooltip')
        .style('position', 'fixed')
        .style('background', '#fff')
        .style('border-radius', '5px')
        .style('padding', '5px')
        .style('opacity', 0) :
      null;

    this.chartProps = {
      g,
      x,
      y,
      xAxisGroup,
      yAxisGroup,
      tooltip
    };
    this.updateData();
  }
}


