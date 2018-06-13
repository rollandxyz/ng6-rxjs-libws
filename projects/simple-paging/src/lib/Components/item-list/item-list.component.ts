import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'xluo-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  @Input() items: string[];

  constructor() { }

  ngOnInit() {
  }

}
