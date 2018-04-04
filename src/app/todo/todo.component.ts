import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  //empty array
  toDoListArray = [];

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.toDoService.getToDoList().snapshotChanges()
    //whenever we make changes to the db the subscribe will be called and the toDoListArray will be updated
    .subscribe(item => {
      this.toDoListArray = [];
      item.forEach(element => {
        //will return a json object of title and boolean 
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.toDoListArray.push(x);
      })

      //sort array isChecked false -> true means that checked onew will go below the unchecked ones
      this.toDoListArray.sort((a,b) => {
        return a.isChecked - b.isChecked;
      })
    });
    
  }

  onAdd(itemTitle) {
    //use the service to add the value to the db using the addTitle method
    this.toDoService.addTitle(itemTitle.value);
    //set item value to null after capturing value
    itemTitle.value = null;
  }

  alterCheck($key: string, isChecked) {
    //if boolean is true we pass false and vise versa
    this.toDoService.checkOrUncheckTitle($key,!isChecked);
  }

  onDelete($key: string) {
    this.toDoService.removeTitle($key);
  }

}
