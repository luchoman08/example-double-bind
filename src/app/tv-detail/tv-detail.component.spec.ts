/**
 * Tv-detail's component unit tests
 *
 * @author Jhon Pantoja <jhon.pantoja@correounivalle.edu.co>
 *
 */

import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TvDetailComponent} from './tv-detail.component';

describe('TvDetailComponent', () => {
  let component : TvDetailComponent;
  let fixture : ComponentFixture < TvDetailComponent >;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({declarations: [TvDetailComponent]})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
