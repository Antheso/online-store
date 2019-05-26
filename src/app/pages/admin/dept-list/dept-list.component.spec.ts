/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeptListComponent } from './dept-list.component';

describe('DeptListComponent', () => {
  let component: DeptListComponent;
  let fixture: ComponentFixture<DeptListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeptListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
