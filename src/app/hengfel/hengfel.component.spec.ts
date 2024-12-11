import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HengfelComponent } from './hengfel.component';

describe('HengfelComponent', () => {
  let component: HengfelComponent;
  let fixture: ComponentFixture<HengfelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HengfelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HengfelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
