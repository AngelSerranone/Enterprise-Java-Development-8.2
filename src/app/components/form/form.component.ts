import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  sent: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.sent= true;
    alert('Form submitted :3');


  }

}
