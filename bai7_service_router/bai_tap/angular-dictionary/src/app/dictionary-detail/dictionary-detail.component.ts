import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IDictionary} from '../model/idictionary';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary: IDictionary = {
    english: '',
    vietnamese: ''
  };

  constructor(
    private dictionaryService: DictionaryService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const eng = param.get('english');
      this.dictionary = this.dictionaryService.findByEnglish(eng);
    });
  }

}
