import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  constructor(private countrieService : CountriesService ){}

  public countries : Country[] = [];
  searchByCountry(term: string) : void{

    this.countrieService.searchCountry(term).subscribe(
      countries=>{
      this.countries = countries;
        console.log(this.countries);

    });
   /*  console.log('desde bycapitalPage');
    console.log({term}); */
  }

}
