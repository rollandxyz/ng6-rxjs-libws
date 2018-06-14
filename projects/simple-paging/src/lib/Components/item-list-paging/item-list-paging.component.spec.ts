import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListPagingComponent } from './item-list-paging.component';

describe('ItemListPagingComponent', () => {
  let component: ItemListPagingComponent;
  let fixture: ComponentFixture<ItemListPagingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListPagingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListPagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
