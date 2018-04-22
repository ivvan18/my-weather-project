import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRegionComponent } from './delete-region.component';

describe('DeleteRegionComponent', () => {
  let component: DeleteRegionComponent;
  let fixture: ComponentFixture<DeleteRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
