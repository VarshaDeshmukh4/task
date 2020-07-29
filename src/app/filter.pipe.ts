import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: "customerEmailFilter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter(val => {
      console.log(val);
      let rVal = val.address.city.toLocaleLowerCase().includes(args);
      return rVal;
    });
  }
}
