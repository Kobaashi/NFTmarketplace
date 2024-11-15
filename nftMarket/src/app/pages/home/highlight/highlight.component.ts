import { Component, Input, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import {isPlatformBrowser, NgClass, NgIf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {VariableService} from '../../../shared/service/variable.service';

@Component({
  selector: 'app-highlight',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './highlight.component.html',
  styleUrl: './highlight.component.scss'
})
export class HighlightComponent {


  @Input() countdownTime: number = 1;
  remainingTime: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;
  showFirstBlock: boolean = true;

  constructor(@Inject(PLATFORM_ID) private platformId: object, protected variableService: VariableService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startCountdown();
    }
  }

  startCountdown() {
    this.remainingTime = this.countdownTime;
    this.updateTimeUnits();

    this.intervalId = setInterval(() => {
      if (this.remainingTime > 0) {
        this.remainingTime--;
        this.updateTimeUnits();
      } else {
        this.stopCountdown();
        setTimeout(() => {
          this.toggleBlocks();
          this.startCountdown();
        });
      }
    }, 1000);
  }

  updateTimeUnits() {
    this.hours = Math.floor(this.remainingTime / 3600);
    this.minutes = Math.floor((this.remainingTime % 3600) / 60);
    this.seconds = this.remainingTime % 60;
  }

  stopCountdown() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  ngOnDestroy(): void {
    this.stopCountdown();
  }

  toggleBlocks() {
    this.showFirstBlock = !this.showFirstBlock;
  }
}
