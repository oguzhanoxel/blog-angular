import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-widgets',
  templateUrl: './side-widgets.component.html',
  styleUrls: ['./side-widgets.component.css']
})
export class SideWidgetsComponent implements OnInit {

  searchForm: FormGroup

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createSeachForm();
  }

  createSeachForm() {
    this.searchForm = this.formBuilder.group({
      searchText: []
    });
  }

  search() {
    if (this.searchForm.valid) {
      let obj = Object.assign({}, this.searchForm.value)
      this.router.navigate([''], {
        queryParams: {
          search: obj.searchText
        }
      });
    }
  }
}
