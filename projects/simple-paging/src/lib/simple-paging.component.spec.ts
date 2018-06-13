import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePagingComponent } from './simple-paging.component';

describe('SimplePagingComponent', () => {
  let component: SimplePagingComponent;
  let fixture: ComponentFixture<SimplePagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
