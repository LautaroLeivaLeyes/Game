import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockgrowComponent } from './blockgrow.component';

describe('BlockgrowComponent', () => {
  let component: BlockgrowComponent;
  let fixture: ComponentFixture<BlockgrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockgrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockgrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
