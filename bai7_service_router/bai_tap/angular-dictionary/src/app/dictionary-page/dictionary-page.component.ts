import {Component, OnInit} from '@angular/core';
import {IDictionary} from '../model/idictionary';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionaryList: IDictionary[] = this.dictionaryService.dictionary;

  constructor(private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
  }

}
