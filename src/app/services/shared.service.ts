import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  palindromes: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(null);
  countOriginal: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  countReverse: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }


}
