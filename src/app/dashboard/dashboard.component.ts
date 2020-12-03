import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private AUTH: AuthService, private ROUTE: Router, private store: SharedService) { }

  query: any;
  message: any;

  ngOnInit(): void {
  }

  search(): any {
    this.AUTH.getMessage({ query: this.query, message: this.message }).subscribe(res => {
      this.store.palindromes.next(res.palindromes);
      this.store.countOriginal.next(res.count_occurance);
      this.store.countReverse.next(res.count_occurance_reverse);
      this.ROUTE.navigate(['/results']);
    });

  }

}
