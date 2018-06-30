import {Component,OnInit} from "@angular/core";
import {Book} from "../shared/book";
import {Router, ActivatedRoute} from "@angular/router";
import {GoogleBooksService} from "../shared/google-books.service";
import { tap } from 'rxjs/operators';
import { LibraryService } from "../shared/library.service";
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{

  private booklist:Book[];
  constructor(private router: Router,private route: ActivatedRoute,private googlebookservice:GoogleBooksService,private libService:LibraryService) {
   
  }
  ngOnInit(){
    this.booklist = this.libService.books;
  }
  

}
