import {Pipe, PipeTransform} from "@angular/core";
import {Name} from "../user/user.model";

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  transform(name: Name, args?: string): string {
    let fullName = name.lastName + ' ' + name.firstName;

    if (args && (args === 'long')) {
      fullName += '-' + name.middleName;
    }

    return fullName;
  }

}
