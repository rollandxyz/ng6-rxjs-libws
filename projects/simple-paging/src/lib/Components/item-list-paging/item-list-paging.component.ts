import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'xluo-item-list-paging',
  templateUrl: './item-list-paging.component.html',
  styleUrls: ['./item-list-paging.component.css']
})
export class ItemListPagingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  paginatorLength = 100;
  pageSize = 10;
  pageSizeOptions = [5, 10, 25, 100];
  pageEvent: PageEvent;
  totalItems = 0;
  currentPage = 0;

  // data and subset of data for display
  nameChangeLog: string[] = [];
  displayNames: string[] = [];

  constructor() {  }

  ngOnInit() {
    this.getData();
    this.setupPaging();
  }

  getData() {
    for (let i = 1; i < 25; i++) {
      this.nameChangeLog.push('item-' + i);
    }
  }

  setupPaging() {
    this.totalItems = this.nameChangeLog.length;
    this.pageSizeOptions = [5, 10, 25, 100];
    this.paginator.showFirstLastButtons = true;

    if (this.totalItems > 0 && this.pageSize > 0) {
      const totalPages = Math.ceil(this.totalItems / this.pageSize);
      this.currentPage = totalPages > 0 ? 1 : 0;
      this.goPage(0);
    }
  }

  goPage(pageIndex: number) {
    const startIndex = pageIndex * this.pageSize;

    let endIndex = startIndex + this.pageSize;
    if (startIndex < this.totalItems) {
      endIndex = Math.min(startIndex + this.pageSize, this.totalItems);
    }

    this.displayNames = this.nameChangeLog.slice(startIndex, endIndex);
    this.currentPage = pageIndex + 1;
  }

  onPage(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex + 1;
    this.goPage(pageEvent.pageIndex);
  }
}
