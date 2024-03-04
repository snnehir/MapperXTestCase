import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributerListComponent } from './contributer-list.component';

describe('ContributerListComponent', () => {
  let component: ContributerListComponent;
  let fixture: ComponentFixture<ContributerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContributerListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContributerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
