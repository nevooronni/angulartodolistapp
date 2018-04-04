import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable()
export class TodoService {
  toDoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  //query db to todolist
  getToDoList() {
    this.toDoList = this.firebasedb.list('titles');
    return this.toDoList;
  }

  addTitle(title: string) {
    this.toDoList.push({
      //object inserted
      title: title,
      isChecked: false
    });
  }

  //pass in unique key from component.ts flag boolean if it checked or unchecked
  checkOrUncheckTitle($key: string, flag: boolean) {
    this.toDoList.update($key, { isChecked: flag });
  }

  //uses unique key to delete it from firebase db
  removeTitle($key: string) {
    this.toDoList.remove($key);
  }

}
