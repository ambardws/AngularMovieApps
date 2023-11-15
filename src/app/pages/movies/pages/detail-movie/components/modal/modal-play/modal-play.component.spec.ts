import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlayComponent } from './modal-play.component';

describe('ModalPlayComponent', () => {
  let component: ModalPlayComponent;
  let fixture: ComponentFixture<ModalPlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPlayComponent]
    });
    fixture = TestBed.createComponent(ModalPlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
