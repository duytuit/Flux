import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqComponent } from './pq.component';

describe('PqComponent', () => {
  let component: PqComponent;
  let fixture: ComponentFixture<PqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
