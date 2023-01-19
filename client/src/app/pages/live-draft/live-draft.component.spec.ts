import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDraftComponent } from './live-draft.component';

describe('LiveDraftComponent', () => {
  let component: LiveDraftComponent;
  let fixture: ComponentFixture<LiveDraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveDraftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveDraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
