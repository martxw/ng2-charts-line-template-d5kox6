import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, Label } from "ng2-charts";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public lineChartData: ChartDataSets[] = [
    {
      data: [
        { x: new Date("2020-01-01"), y: 0 },
        { x: new Date("2020-02-01"), y: 0 },
        { x: new Date("2020-03-01"), y: 0 },
        { x: new Date("2020-04-01"), y: 0 },
        { x: new Date("2020-05-01"), y: 0 },
        { x: new Date("2020-06-01"), y: 0 },
        { x: new Date("2020-07-01"), y: 0 },
        { x: new Date("2020-07-09"), y: 1 },
        { x: new Date("2020-08-01"), y: 1 },
        { x: new Date("2020-09-01"), y: 0 },
        { x: new Date("2020-10-01"), y: 0 },
        { x: new Date("2020-11-01"), y: 0 },
        { x: new Date("2020-12-01"), y: 0 }
      ],
      label: "TOIL",
      lineTension: 0
    },
    {
      data: [
        { x: new Date("2020-01-01"), y: 5 },
        { x: new Date("2020-02-01"), y: 4 },
        { x: new Date("2020-03-01"), y: 4 },
        { x: new Date("2020-04-01"), y: 0 },
        { x: new Date("2020-05-01"), y: 0 },
        { x: new Date("2020-06-01"), y: 0 },
        { x: new Date("2020-07-01"), y: 0 },
        { x: new Date("2020-07-09"), y: 0 },
        { x: new Date("2020-08-01"), y: 0 },
        { x: new Date("2020-09-01"), y: 0 },
        { x: new Date("2020-10-01"), y: 0 },
        { x: new Date("2020-11-01"), y: 0 },
        { x: new Date("2020-12-01"), y: 0 }
      ],
      label: "Carry Over",
      lineTension: 0
    },
    {
      data: [
        { x: new Date("2020-01-01"), y: 2 },
        { x: new Date("2020-02-01"), y: 4 },
        { x: new Date("2020-03-01"), y: 6 },
        { x: new Date("2020-04-01"), y: 8 },
        { x: new Date("2020-05-01"), y: 10 },
        { x: new Date("2020-06-01"), y: 12 },
        { x: new Date("2020-07-01"), y: 14 },
        { x: new Date("2020-07-09"), y: 14 },
        { x: new Date("2020-08-01"), y: 16 },
        { x: new Date("2020-09-01"), y: 18 },
        { x: new Date("2020-10-01"), y: 20 },
        { x: new Date("2020-11-01"), y: 22 },
        { x: new Date("2020-12-01"), y: 24 }
      ],
      label: "Annual Accrual",
      lineTension: 0
    }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartOptions: ChartOptions & { annotation: any } = {
    responsive: true,
    scales: {
      yAxes: [
        {
          stacked: true
        }
      ],
      xAxes: [
        {
          type: "time",
          distribution: "linear",
          time: {
            unit: "month"
          },
          ticks: {
            source: "auto"
          },
          scale: "data"
        }
      ]
    },
    tooltips: {
      mode: "index",
      intersect: false,
      position: "average"
    },
    hover: {
      mode: "index",
      intersect: false
    },
    legend: {
      onClick: undefined
    }
  };
  public lineChartColors: Color[] = [
    {
      borderColor: "black",
      backgroundColor: "rgba(255,0,0,0.3)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";
  public lineChartPlugins = [];

  constructor() {}

  ngOnInit() {}
}
