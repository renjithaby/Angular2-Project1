/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Section2Component } from './section2.component';

describe('Section2Component', () => {
  let component: Section2Component;
  let fixture: ComponentFixture<Section2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
