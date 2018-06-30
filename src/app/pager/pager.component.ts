import {Component, OnInit, Input, Output,EventEmitter} from "@angular/core";


@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  
  @Input()
  private page:number=1;
  @Input()
  private totalPages:number;

  @Output()
  private changePage:EventEmitter<number> = new EventEmitter<number>();
  constructor() {
  }

  next() {
    this.changePage.emit(this.page+ 1);
  }

  prev() {
    if(this.page>1){
      this.changePage.emit(this.page- 1);
    }
    
  }


  ngOnInit() {
  }

}
