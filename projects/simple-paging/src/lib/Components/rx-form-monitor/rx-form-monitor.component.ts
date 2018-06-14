import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'xluo-rx-form-monitor',
  templateUrl: './rx-form-monitor.component.html',
  styleUrls: ['./rx-form-monitor.component.css']
})
export class RxFormMonitorComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  paginatorLength = 100;
  paginatorPageSize = 10;
  paginatorPageSizeOptions = [5, 10, 25, 100];
  paginatorPageEvent: PageEvent;



  nameChangeLog: string[] = [];
  displayNames: string[] = [];

  pageSize = 10;
  totalItems = 0;
  totalPages = 0;
  currentPage = 0;
  startPos = 0;
  endPos = 0;

  angularForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.angularForm = new FormGroup (
      {
        name: new FormControl(),
        curPage: new FormControl(null, Validators.max(this.totalPages))
      }
    );
  }

  ngOnInit() {
    this.setDataSource();

    this.setupPaging();

    const nameControl = this.angularForm.get('name');
    nameControl.valueChanges.forEach(
      (value: string) => {
        this.pageSize = Number.parseInt(value);
        this.setupPaging();
      }
    );

    const curPageControl = this.angularForm.get('curPage');
    curPageControl.valueChanges.forEach(
      (value: string) => {
        this.currentPage = Number.parseInt(value);
        if (this.currentPage && this.currentPage <= this.totalPages) {
          this.goPage(this.currentPage);
        }
      }
    );
  }

  setDataSource() {
    for (let i = 1; i < 25; i++) {
      this.nameChangeLog.push('item-' + i);
    }
  }

  setupPaging() {
    this.totalItems = this.nameChangeLog.length;
    if (this.totalItems > 0 && this.pageSize > 0) {
      this.totalPages = Math.ceil(this.totalItems / this.pageSize);
      this.startPos = 0;
      this.endPos = (this.totalItems > this.pageSize) ? this.pageSize : this.totalItems;

      this.currentPage = this.totalPages > 0 ? 1 : 0;

      this.goPage(this.currentPage);
    } else {
      this.totalPages = 0;
      this.startPos = 0;
      this.endPos = 0;
      this.currentPage = 0;
    }

    this.paginatorLength = this.totalItems;
    this.paginatorPageSize = this.pageSize;
    this.paginatorPageSizeOptions = [5, 10, 25, 100];
    // this.paginatorPageEvent: PageEvent;
  }

  getFirstPage(): string[] {
    return this.nameChangeLog.slice(
      this.startPos,
      this.pageSize
    );
  }
  goNext() {
    this.currentPage = this.currentPage + 1;
    this.goPage(this.currentPage);
  }
  goPrevious() {
    this.currentPage = this.currentPage - 1;
    this.goPage(this.currentPage);
  }
  goPage(page: number) {
    this.startPos = (page - 1) * this.pageSize;
    this.endPos = (page * this.pageSize <= this.totalItems) ? (page * this.pageSize) : this.totalItems;
    this.displayNames =  this.nameChangeLog.slice(this.startPos, this.endPos);
  }
  get disableNext(): boolean {
    return this.currentPage >= this.totalPages;
  }
  get disablePrevious(): boolean {
    return this.currentPage <= 1;
  }

  onPage(pageEvent: PageEvent) {
    const startIndex = pageEvent.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + this.paginator.pageSize, length) : startIndex + this.paginator.pageSize;
    console.log(pageEvent.previousPageIndex, pageEvent.pageIndex, startIndex, endIndex);
    this.displayNames =  this.nameChangeLog.slice(startIndex, endIndex);
    this.currentPage = pageEvent.pageIndex + 1;
  }
}
