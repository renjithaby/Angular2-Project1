/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Section6Component } from './section6.component';

describe('Section6Component', () => {
  let component: Section6Component;
  let fixture: ComponentFixture<Section6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Section6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Section6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
