import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewSearchComponent } from './preview-search.component';

describe('PreviewSearchComponent', () => {
  let component: PreviewSearchComponent;
  let fixture: ComponentFixture<PreviewSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
