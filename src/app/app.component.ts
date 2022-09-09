import { toDoList } from './../model/toDoList.models';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model: string = '';
  lists = [
    { text: 'Hit the gym', done: false },
    { text: 'Pay bills', done: true },
    { text: 'Meet George', done: false },
    { text: 'Buy eggs', done: false },
    { text: 'Read a book', done: false },
    { text: 'Organize office', done: false }
  ]
  isDone(list: any) {
    list.done = !list.done
  }
  deleteItem(i: number) {
    this.lists.splice(i, 1)
  }
  addItem() {
    if (!this.model) {
      alert('You must write something!')
    } else {
      const list: toDoList = { text: this.model, done: false }
      this.lists.push(list)
      this.model = ''
    }
  }
}
