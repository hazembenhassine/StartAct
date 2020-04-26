import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitiatorsComponent } from './initiators.component';

describe('InitiatorsComponent', () => {
  let component: InitiatorsComponent;
  let fixture: ComponentFixture<InitiatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitiatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitiatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
