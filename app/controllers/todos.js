import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodosController extends Controller {
  @tracked newTodoTilte = '';
  @tracked todos = [];

  @action
  updateNewTodoTitle(event) {
    this.newTodoTilte = event.target.value;
  }

  @action
  addTodo() {
    this.todos = [...this.todos, this.newTodoTilte];
    this.newTodoTilte = '';
  }

  @action
  deleteTodo(event) {
    console.log('delete', event);
    this.todos.remove(event.target.value);
  }
}
