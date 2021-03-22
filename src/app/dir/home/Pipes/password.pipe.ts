import { PipeTransform , Pipe} from "@angular/core";
@Pipe({
  name:'password'
})
export class PasswordPipe implements PipeTransform{
  transform(value:any){
    // console.log(value)
    if(value){
      value = value.split('');
    let star = ''
    value.forEach(element => {
      star = star+'*';
    });
    return star;
    }
    else{
      return value;
    }
  }
}
