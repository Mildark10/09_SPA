import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'countries-table',
  templateUrl: './country-tab.component.html',
  styles: [
    `
    img{
      width : 50px;
    }
    `
  ]
})
export class CountryTabComponent {

    @Input()
    public countries : Country[] = [] ;
}
