import {Component} from "@angular/core";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html'
})
export class LanguagesComponent {
  languages: string[] = ['Java', 'JavaScript', 'C++'];
  selectedLanguageIndex: number = 2;

  onChangeLanguage(): void {
    this.selectedLanguageIndex = (this.selectedLanguageIndex + 1) % 3;
  }
}
