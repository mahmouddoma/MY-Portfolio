import { Component, HostBinding } from '@angular/core';
import { trigger, animate, style, query, stagger, transition, state } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger("myAnimationTrigger", [
     
    ])
  ]
})
export class AppComponent {
  title = 'my-portfolio';
}
export const scrollAnimation = trigger('scrollAnimation', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0 }),
      stagger(50, [
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true }),
  ])
]);