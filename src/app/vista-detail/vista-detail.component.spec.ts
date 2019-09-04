import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetailComponent } from './vista-detail.component';

describe('VistaDetailComponent', () => {
  let component: VistaDetailComponent;
  let fixture: ComponentFixture<VistaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
