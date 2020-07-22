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
  tableColumns: string[] = ['name', 'message', 'lastMessageDate'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  constructor(private apiCallService: APICallService) { }

  dataSource: MatTableDataSource<any>;

  ngOnInit() {

    this.apiCallService.getData().subscribe( (result ) => {
      const seekers = [...result.seekers].map((seeker) => {
        return {
          name: seeker.firstName + ' ' + seeker.lastName,
          message: seeker.messages[0].body,
          lastMessageDate: seeker.lastMessageDate
        };
      });
      console.log(seekers);
      console.log(this.sort);
      this.dataSource = new MatTableDataSource(seekers);
      this.dataSource.sort = this.sort;

      this.dataSource.paginator = this.paginator;
    } );

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}




