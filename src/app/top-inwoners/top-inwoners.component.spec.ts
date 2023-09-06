import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInwonersComponent } from './top-inwoners.component';

describe('TopInwonersComponent', () => {
  let component: TopInwonersComponent;
  let fixture: ComponentFixture<TopInwonersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopInwonersComponent]
    });
    fixture = TestBed.createComponent(TopInwonersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
