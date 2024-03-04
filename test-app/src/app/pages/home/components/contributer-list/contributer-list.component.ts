import { NgFor, NgStyle } from '@angular/common';
import { AfterContentInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Contributer } from '../../interfaces/Contributer';

@Component({
  selector: 'app-contributer-list',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './contributer-list.component.html',
  styleUrl: './contributer-list.component.scss'
})
export class ContributerListComponent {
  @Input() contributers: Contributer[] = []

}
