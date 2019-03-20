import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRegPanelComponent } from './log-reg-panel.component';

describe('LogRegPanelComponent', () => {
  let component: LogRegPanelComponent;
  let fixture: ComponentFixture<LogRegPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogRegPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRegPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
