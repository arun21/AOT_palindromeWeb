import { SharedService } from './../services/shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  palindromes: any;
  originalOccurance: any;
  reversedOccurance: any;
  constructor(private store: SharedService, private ROUTE: Router) { }

  ngOnInit(): void {
    this.palindromes = this.store.palindromes.getValue()
      && this.store.palindromes.getValue().length > 0 ? this.store.palindromes.getValue() : 0;
    this.originalOccurance = this.store.countOriginal.getValue();
    this.reversedOccurance = this.store.countReverse.getValue();
  }

  goToHome() {
    this.ROUTE.navigate(['/profile']);
  }

}
