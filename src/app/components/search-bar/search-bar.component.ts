import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchDishService } from 'src/app/services/search-dish.service';
import { debounceTime, Observable, map, startWith} from 'rxjs';
import { FormControl } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { DataShareService } from 'src/app/services/data-share.service';
import { autoCompleteDish } from 'src/app/models/autocompleteInterface';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {



  @ViewChild(MatAutocompleteTrigger) autocomplete: MatAutocompleteTrigger;

  filteredStreets: Observable<string[]>;

  private _filter(value: string): string[] {
    if(value.length > 2){
      this.searchDish.autoCompleteSearch(value).subscribe(data =>{
        data.map((item:any) => this.streets.push(item.title))
      });
  }
      const filterValue = this._normalizeValue(value);
      return this.streets.filter(street => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  //----------------------------------------------
  streets: string[] = [];
  dishes:autoCompleteDish;

  checking(){
    this.control.value ? null : this.autocomplete.closePanel(); 
  }

  apipedido(query:string){
    query = this.control.value;
    this.searchDish.autoCompleteSearch(query).subscribe(data =>{
      data.map((item:any) => this.streets.push(item.title))
    })
  }

  control = new FormControl();

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      query: [''],
      vegan: [false]
    })

    this.filteredStreets = this.control.valueChanges.pipe(
      debounceTime(500),
      startWith(''),
      map(value => this._filter(value)),
    );

    this.data.currentMessage.subscribe(message => this.message = this.dishes);
  }
  searchForm = new FormGroup({});
  



  constructor(private fb:FormBuilder, private searchDish:SearchDishService, private data:DataShareService) { }
  message:autoCompleteDish;

  changeData(){
    this.data.changeMessage(this.dishes.results);
  }

  search(){
    let query = this.control.value;
    let vegan = this.searchForm.value.vegan === true ? 'vegan' : '';

    this.searchDish.search(query, vegan).subscribe(data =>{
      this.dishes = data;
      this.changeData();
    })
  }
}
