import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-grid-container',
  templateUrl: './user-grid-container.component.html',
  styleUrls: ['./user-grid-container.component.scss']
})
export class UserGridContainerComponent implements OnInit {

  @Input() arrUser: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
