import {Component} from "@angular/core";
import {Book} from "../shared/book";
import {Router, ActivatedRoute} from "@angular/router";
import {GoogleBooksService} from "../shared/google-books.service";
import { tap } from 'rxjs/operators';
import { LibraryService } from "../shared/library.service";
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  private book: Book;
  constructor(private router: Router,private route: ActivatedRoute,private googlebookservice:GoogleBooksService,private libService:LibraryService) {
    this.route.params.subscribe(params => {
      if(params['bookId']){
       this.getBook(params['bookId']);
      }
    });
  }

  getBook(bookId: string) {
      this.googlebookservice.retrieveBook(bookId)
      .pipe(
        tap(val => console.log(val))
      )
      .subscribe(val => this.book = val);
  }

  hasBook(book: Book): boolean {
    //TODO
    if(book){
      return this.libService.hasBook(book);
    }

    return false;
  }

  addBook(book: Book) {
    if(book){
     return this.libService.addBook(book);
    }
  }

  removeBook(book: Book) {
    return this.libService.removeBook(book);
  }
}
