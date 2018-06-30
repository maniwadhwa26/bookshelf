import {Component, OnInit} from '@angular/core';
import {GoogleBooksService} from "../shared/google-books.service";
import {Book} from "../shared/book";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchText:string;
  constructor(private router: Router,private route: ActivatedRoute,private googlebookservice:GoogleBooksService) {
    this.route.params.subscribe(params => {
      if(params['term']){
        this.onSearch(params['term']);
        this.searchText = params['term'];
      }
    });
  }

  doSearch() {
    this.router.navigate(['search',{term:this.searchText}])
  }

  onSearch(term: string) {
    this.googlebookservice.searchBooks(term);
  }

  ngOnInit() {
  }

}
