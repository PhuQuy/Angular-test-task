import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountWord } from '@app/models/count-word';
import { RandomRestaurant } from '@app/models/random-restaurant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Calculates words
   * @param url 
   * @returns words 
   */
  public calculateWords(url: string): Observable<CountWord[]> {
    return this.http.get<RandomRestaurant>(url).pipe(
      map((a) => a?.description),
      map((description: string) => this.mapCountWords(description))
    )
  }

  /**
   * Maps count words
   */
  public mapCountWords(val: string): CountWord[] {
    const newStr = val.split(' ').reduce((acc, rec) => {
      return ({ ...acc, [rec]: ((acc as any)[rec] || 0) + 1 })
    }, {});
    return Object.entries(newStr).map(i => {
      return {
        value: i[0],
        count: i[1] as number
      }
    }).sort((a, b) => { return b.count - a.count })
  }
}
