import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhomkyComponent } from './nhomky.component';

describe('NhomkyComponent', () => {
  let component: NhomkyComponent;
  let fixture: ComponentFixture<NhomkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhomkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhomkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
