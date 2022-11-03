import { TodoDto } from '@infrastructure/api/todo-api.service';

export type TodoEntity = TodoDto;

export interface StreamableActionsStateModel {
  isLoading: boolean;
  todos: TodoEntity[];
  updatedAt: number | null;
}

