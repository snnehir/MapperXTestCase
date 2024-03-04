import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { ContributerListComponent } from './components/contributer-list/contributer-list.component';
import { Contributer } from './interfaces/Contributer';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ContributerListComponent, NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild('container') container?: ElementRef;
  @ViewChild('stoplight') stoplight?: ElementRef;

  baseUrl = "https://github.com"
  contributers: Contributer[] = [
    {
      avatar: "https://github.githubassets.com/assets/curl-24ff778d1afc.jpeg",
      name: "curl",
      link: `${this.baseUrl}/curl`
    },
    {
      avatar: "https://github.githubassets.com/assets/directus-4da9e46da0ac.png",
      name: "Directus",
      link: `${this.baseUrl}/directus`
    },
    {
      avatar: "https://github.githubassets.com/assets/prophen-da9b089d8a25.jpeg",
      name: "Nikema",
      link: `${this.baseUrl}/prophen`
    },
    {
      avatar: "https://github.githubassets.com/assets/imolorhe-9d771b1d4332.jpeg",
      name: "Samuel",
      link: `${this.baseUrl}/imolorhe`
    },
    {
      avatar: "https://github.githubassets.com/assets/yyx990803-e11c7b140b17.jpeg",
      name: "Evan You",
      link: `${this.baseUrl}/yyx990803`
    },
    {
      avatar: "https://github.githubassets.com/assets/homebrew-c7e38eeacb52.png",
      name: "Homebrew",
      link: `${this.baseUrl}/homebrew`
    },
    {
      avatar: "https://github.githubassets.com/assets/dayhaysoos-c50659cac73b.jpeg",
      name: "Nick DeJesus",
      link: `${this.baseUrl}/dayhaysoos`
    },
    {
      avatar: "https://github.githubassets.com/assets/commandpost-18d45fffda67.png",
      name: "CommandPost",
      link: `${this.baseUrl}/commandpost`
    },
    {
      avatar: "https://github.githubassets.com/assets/eslint-33bd6140c37f.png",
      name: "ESLint",
      link: `${this.baseUrl}/eslint`
    }


  ]

  // when page is refreshed, shuffle contributer list
  shuffledContributers: Contributer[] = []
  constructor() {
    this.shuffledContributers = this.getShuffledContributers()
  }

  getShuffledContributers = () => {
    const shuffledContributers: Contributer[] = this.contributers
    let currentIndex = shuffledContributers.length, randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [shuffledContributers[currentIndex], shuffledContributers[randomIndex]] = [
        shuffledContributers[randomIndex], shuffledContributers[currentIndex]];
    }
    return shuffledContributers;
  }

  // add skew and stoplight effect to container according to mouse location
  onMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    if (this.container && this.stoplight) {
      const containerElement = this.container.nativeElement
      const spotlightElement = this.stoplight.nativeElement

      const rect = containerElement.getBoundingClientRect()

      const width = containerElement.offsetWidth;
      const height = containerElement.offsetHeight

      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const inside = x < width && x > 0 && y < height && y > 0;

      if (inside) {
        spotlightElement.style.setProperty('--mouse-x', `${x + 250}px`)
        spotlightElement.style.setProperty('--mouse-y', `${y + 250}px`)

        const rotateY = 1.5 - (x / (width / 2))
        const rotateX = (y / (height / 2)) - 1
        containerElement.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }
    }

  }

  // convert container to its initial state
  onMouseLeave = () => {
    if (this.container && this.stoplight) {
      const containerElement = this.container.nativeElement
      const spotlightElement = this.stoplight.nativeElement

      containerElement.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg)`
      containerElement.style.transition = "all 500ms ease-out"
      spotlightElement.style.setProperty('--mouse-x', `0px`)
      spotlightElement.style.setProperty('--mouse-y', `0px`)
    }

  }
}
