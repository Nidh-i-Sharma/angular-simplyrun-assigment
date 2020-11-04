import { Component, Input } from "@angular/core";
import { UserService } from "./user.service";
import { Employee } from "./employee";

@Component({
  selector: "hello",
  template: `
    <h4>
      <input type="text" [(ngModel)]="searchVal"id="s" placeholder="Search.." name="search" />
      <table>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>first_name</th>
          <th>last_name</th>
        </tr>
        <tr *ngFor="let data of emp |filter:searchVal">
          <td>{{ data.id }}</td>
          <td></td>
          <td>{{ data.email }}</td>
          <td></td>
          <td>{{ data.first_name }}</td>
          <td></td>
          <td>{{ data.last_name }}</td>
          <td>
            <tr></tr>
          </td>
        </tr>
      </table>
    </h4>
  `,
  styles: [
    `
      h4 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  @Input() name: string;
  emp: Employee[];
  //Employees:[];
  searchVal: string;
  constructor(private _userService: UserService) {}
  ngOnInit() {
    this._userService.getData().subscribe(data => (this.emp = data.data));
  }
}
