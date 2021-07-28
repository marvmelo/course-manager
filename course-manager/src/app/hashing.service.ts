import { Injectable } from '@angular/core';
import * as hasha from 'hasha';

@Injectable({
  providedIn: 'root'
})
export class HashingService {

  constructor() { }

  HashString(text: string): string {
    return hasha(text);
  }
}
