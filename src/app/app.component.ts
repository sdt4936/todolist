import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  Array = [];

  addTodo(value:any){
    if(value != ''){
      this.Array.push(value);
    }
  }
  deleteItem(todo:any){
    for(let i=0 ;i<= this.Array.length ;i++){
     if(todo== this.Array[i]){
      this.Array.splice(i,1)
     }
    }
   }
}
