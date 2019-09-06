import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreePhanquyenComponent } from './tree-phanquyen.component';

describe('TreePhanquyenComponent', () => {
  let component: TreePhanquyenComponent;
  let fixture: ComponentFixture<TreePhanquyenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreePhanquyenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreePhanquyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
