import { Component, OnInit, ViewChild} from '@angular/core';
import { APICallService } from './apicall.service';
import { APIdata } from './apidata';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MessageBrowser';
  tableColumns: string[] = ['Name', 'Message', 'Date'];

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;
  searchKey: string;

  constructor (private APICallService: APICallService) { }

  dataSource:MatTableDataSource<any>;

  ngOnInit() {

    this.APICallService.getData().subscribe( (result )=> {
      this.dataSource = new MatTableDataSource(result.seekers);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    } )
    
  }

}




