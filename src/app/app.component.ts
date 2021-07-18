import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      imageUrl: 'assets/tree.jpeg',
      content: `I saw a neat tree`
    },
    {
      title: 'Snowy Mountain',
      username: 'mountainlover',
      imageUrl: 'assets/mountain.jpeg',
      content: `I saw a mountain`
    },
    {
      title: 'Snowy Biking',
      username: 'mountainbiking',
      imageUrl: 'assets/biking.jpeg',
      content: `I did a biking today`
    }
  ]
}
