import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
errorMessage='An Error Occured! please contact the support team at Social Prachar'

  constructor() { }

  ngOnInit(): void {
  }

}
