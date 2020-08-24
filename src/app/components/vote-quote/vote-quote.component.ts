import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-quote',
  templateUrl: './vote-quote.component.html',
  styleUrls: ['./vote-quote.component.css']
})
export class VoteQuoteComponent implements OnInit {
  likes: number = 0;

  upvoteClick() {
    this.likes++;
  }

  downvoteClick() {
    this.likes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
