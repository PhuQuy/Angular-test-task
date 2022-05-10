import { CountWord } from './../../models/count-word';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public countLetterForm!: FormGroup;
  public countWordForm!: FormGroup;
  public textCounts: CountWord[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.generateForm();
  }

  /**
   * Generates form
   */
  generateForm(): void {
    this.countLetterForm = this.formBuilder.group({
      text: [null]
    })

    this.countWordForm = this.formBuilder.group({
      url: ['https://random-data-api.com/api/restaurant/random_restaurant', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    })
  }

  get getUrl() {
    return this.countWordForm.controls;
  }

  /**
   * Calculates words
   */
  calculateWords(): void {
    if (this.countWordForm.invalid || !this.countWordForm.value.url) {
      return;
    }
    this.apiService.calculateWords(this.countWordForm.value.url).subscribe(val => {
      console.log(val);
      this.textCounts = val.slice(0, 10);
    })
  }
}
