import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "./employee";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(emp: Employee[], searchVal: string): Employee[] {
    if (!emp || !searchVal) {
      return emp;
    }
    return emp.filter(
      empl =>
        empl.first_name
          .toLocaleLowerCase()
          .indexOf(searchVal.toLocaleLowerCase()) !== -1
    );
  }
}
