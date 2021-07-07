import { Component } from '@angular/core';
//import{Model} from './model';
import{Model, TodoItem} from './model';

@Component({
  selector: 'app-root',//app companentinin nerede kullanılacağı
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  model=new Model();

  isDisplay=false;

  getName(){
    return this.model.user;
  }

  getItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter((item: { action: any; })=>!item.action);
  }

  addItem(value: string){
    if(value!=""){
      this.model.items.push(new TodoItem(value,false));
    }
  }
}
