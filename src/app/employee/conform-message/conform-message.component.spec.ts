import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformMessageComponent } from './conform-message.component';

describe('ConformMessageComponent', () => {
  let component: ConformMessageComponent;
  let fixture: ComponentFixture<ConformMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConformMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConformMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
