import { TodoDto } from '@infrastructure/api/todo-api.service';

export class StreamableActionsFetchTodosRequest {
  static readonly type = '[Streamable Actions] Fetch Todos Request';

  constructor(public payload: { timestamp: number; }) { }
}

export class StreamableActionsFetchTodosSuccess {
  static readonly type = '[Streamable Actions] Fetch Todos Success';

  constructor(public payload: { todos: TodoDto[]; }) { }
}

