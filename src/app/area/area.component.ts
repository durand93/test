import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AreaService} from "../services/area/area.service";

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  name: string = "";
  result: number = 0;
  circleForm = {
    radius: null
  };
  rectangleForm = {
    length: null,
    width:null,
  };
  squareForm = {
    side: null
  };
  trapezeForm = {
    height: null,
    smallBase: null,
    bigBase: null,
  };


  constructor(private route: ActivatedRoute,private service:AreaService) {
  }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name']
  }

  onSubmit(form: NgForm) {
    if (this.name == "circle") {
      this.circleForm = {
        radius: form.value ['radius']
      };
      this.service.calculateAreaCircle(this.circleForm).subscribe((response: any) => {
        this.result=response.result;
        form.reset();
      }, (error) => {
        console.log(error)
      });
    }else if(this.name == "square"){
      this.squareForm ={
        side: form.value['side']
      }
      this.service.calculateAreaSquare(this.squareForm).subscribe((response: any) => {
        this.result=response.result;
        form.reset();
      }, (error) => {
        console.log(error)
      });
    }else if(this.name == "rectangle"){
      this.rectangleForm ={
        length: form.value['length'],
        width: form.value['width']
      }
      this.service.calculateAreaRectangle(this.rectangleForm).subscribe((response: any) => {
        this.result=response.result;
        form.reset();
      }, (error) => {
        console.log(error)
      });
    }
    else {
      this.trapezeForm ={
        height: form.value['height'],
        smallBase: form.value['smallBase'],
        bigBase: form.value['bigBase'],
      }
      this.service.calculateAreaTrapeze(this.trapezeForm).subscribe((response: any) => {
        this.result=response.result;
        form.reset();
      }, (error) => {
        console.log(error)
      });
    }
  }

}
