import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {PerimeterService} from "../services/permiter/perimeter.service";
import {ConversionService} from "../services/conversion/conversion.service";

@Component({
  selector: 'app-perimeter',
  templateUrl: './perimeter.component.html',
  styleUrls: ['./perimeter.component.scss']
})
export class PerimeterComponent implements OnInit {
  name: string = "";
  unit: string = "meter";
  result: number = 0;
  circleForm = {
    radius: null
  };
  rectangleForm = {
    length: null,
    width: null,
  };
  squareForm = {
    side: null
  };
  trapezeForm = {
    side1: null,
    side2: null,
    side3: null,
    side4: null,
  };
  convertForm = {
    selectedUnit: null,
    perimeterValue: 0,
    currentUnit: ''
  };

  constructor(private route: ActivatedRoute, private service: PerimeterService, private convertService: ConversionService) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  onSubmit(form: NgForm) {
    if (this.name == "circle") {
      this.circleForm = {
        radius: form.value ['radius']
      };
      this.service.calculatePerimeterCircle(this.circleForm).subscribe((response: any) => {
        this.result = response.result;
        form.reset();
      }, (error) => {
        console.log(error)
      });
    } else if (this.name == "square") {
      this.squareForm = {
        side: form.value['side']
      }
      this.service.calculatePerimeterSquare(this.squareForm).subscribe((response: any) => {
        this.result = response.result;
        form.reset();
      }, (error) => {
        console.log(error)
      });
    } else if (this.name == "rectangle") {
      this.rectangleForm = {
        length: form.value['length'],
        width: form.value['width']
      }
      this.service.calculatePerimeterRectangle(this.rectangleForm).subscribe((response: any) => {
        this.result = response.result;
        form.reset();
      }, (error) => {
        console.log(error)
      });
    } else {
      this.trapezeForm = {
        side1: form.value['side1'],
        side2: form.value['side2'],
        side3: form.value['side3'],
        side4: form.value['side4'],
      }
      this.service.calculatePerimeterTrapeze(this.trapezeForm).subscribe((response: any) => {
        this.result = response.result;
        form.reset();
      }, (error) => {
        console.log(error)
      });
    }

  }

  onChange(e: any, value: number) {
    if (value > 0) {
      this.convertForm = {
        selectedUnit: e.target.value,
        perimeterValue: value,
        currentUnit: this.unit,
      }
      this.convertService.convertFunction(this.convertForm).subscribe((response: any) => {
        this.result = response.result;
        this.unit = response.currentUnit;
      }, (error) => {
        console.log(error)
      });
    }
  }
}
