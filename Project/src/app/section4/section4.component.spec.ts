/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Section4Component } from './section4.component';

describe('Section4Component', () => {
  let component: Section4Component;
  let fixture: ComponentFixture<Section4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
