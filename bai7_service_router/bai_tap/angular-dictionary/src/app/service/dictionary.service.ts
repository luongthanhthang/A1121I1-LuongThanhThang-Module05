import {Injectable} from '@angular/core';
import {IDictionary} from '../model/idictionary';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  // tslint:disable-next-line:variable-name
  private _dictionary: IDictionary[] = [
    {vietnamese: 'một', english: 'one'},
    {vietnamese: 'hai', english: 'two'},
    {vietnamese: 'ba', english: 'three'},
    {vietnamese: 'bốn', english: 'four'},
    {vietnamese: 'năm', english: 'five'},
    {vietnamese: 'sáu', english: 'six'},
    {vietnamese: 'bảy', english: 'seven'},
    {vietnamese: 'tám', english: 'eight'},
    {vietnamese: 'chín', english: 'nine'},
    {vietnamese: 'mười', english: 'ten'}
  ];

  constructor() {
  }


  get dictionary(): IDictionary[] {
    return this._dictionary;
  }

  set dictionary(value: IDictionary[]) {
    this._dictionary = value;
  }

  findByEnglish(english: string) {
    // this._dictionary.find(eng => eng.english === english);
    for (let i = 0; i < this._dictionary.length; i++) {
      if (this._dictionary[i].english === english) {
        return this._dictionary[i];
      }
    }
  }
}
