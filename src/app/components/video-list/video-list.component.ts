import { Component } from '@angular/core';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss',
})
export class VideoListComponent {
  accordionItems = [
    {
      title: 'Original Video:',
      link: 'https://www.youtube.com/live/3OGrEoIIPeU?si=Z_sFZ2CQPMUgM2Dv',
      content: [
        'https://www.youtube.com/live/3OGrEoIIPeU?si=3pj9814ldibXl0rU&t=1190',
        'https://www.youtube.com/live/3OGrEoIIPeU?si=3pj9814ldibXl0rU&t=2190',
        'https://www.youtube.com/live/3OGrEoIIPeU?si=3pj9814ldibXl0rU&t=3190',
        'https://www.youtube.com/live/3OGrEoIIPeU?si=3pj9814ldibXl0rU&t=4190',
        'https://www.youtube.com/live/3OGrEoIIPeU?si=3pj9814ldibXl0rU&t=5190',
        'https://www.youtube.com/live/3OGrEoIIPeU?si=3pj9814ldibXl0rU&t=6190',
      ],
    },
    // { title: 'Accordion Panel 2', content: 'Content for Panel 2' },
    // { title: 'Accordion Panel 3', content: 'Content for Panel 3' },
  ];
}
