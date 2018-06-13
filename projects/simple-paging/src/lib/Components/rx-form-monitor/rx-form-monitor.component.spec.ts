import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxFormMonitorComponent } from './rx-form-monitor.component';

describe('RxFormMonitorComponent', () => {
  let component: RxFormMonitorComponent;
  let fixture: ComponentFixture<RxFormMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxFormMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxFormMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
