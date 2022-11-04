import { orderBy } from 'lodash';

interface Todo {
  id: number;
  title: string;
  description?: string;
}

enum TodoStatus {
  IS_EDITING = 'IS_EDITING',
  IS_SAVING = 'IS_SAVING',
  IS_REMOVING = 'IS_REMOVING',
  PERSISTED = 'PERSISTED' // default value
}

// data fetched from API
const todosData = [
  { id: 100, title: 'buy milk', },
  { id: 200, title: 'walk the dog', description: 'important' },
  { id: 300, title: 'do them math', },
  { id: 400, title: 'buy bread', description: 'sliced' },
  { id: 500, title: 'call Methew', },
];



`====== 16:08 ====`

// TODO: designing state shape
const stateSlice = {
  isLoading: false,

  // === domain aka entities aka persisted state
  todos: [
    { id: 100, title: 'buy milk', isImportant: true, },

    { id: 300, title: 'do them math', },
    { id: 400, title: 'buy bread', description: 'sliced' },
    { id: 500, title: 'call Methew', isImportant: false, isUrgent: false },
  ],

  // todoEntities: {
  //   byId: {
  //     [200]: { id: 200, title: 'walk the dog', description: 'important' },
  //     [100]: { id: 100, title: 'buy milk', isImportant: true, },
  //   },
  //   allIds: [100, 200],
  // },

  // === ui aka feature aka application state
  uiTodoStatuses: {
    [100]: TodoStatus.IS_EDITING,
    [200]: TodoStatus.IS_REMOVING,
  },

  uiIsImportant: {
    [100]: true,
    [500]: false,
  },

  uiTodosSortBy: 'title',

  uiDragNDropOrder: [500, 100, 300, 400, 200],

};

// @Selector()
const todoWithStatusList = (stateSlice: any) => {
  return stateSlice.todo.map((todo: any) => {
    const status = stateSlice.uiTodoStatuses[todo.id] || TodoStatus.PERSISTED;
    return {
      ...todo,
      status,
    }
  });
}

// @Selector()
const sortedTodos = (stateSlice: any) => {
  const todos = todoWithStatusList(stateSlice);
  return orderBy(todos, [stateSlice.uiTodosSortBy], ['asc']);
}


// @Selector()
const todoWithStatusList_NAIVE = (stateSlice: any) => {
  return stateSlice.todo.map((t: any) => {
    const status = t.status ? t.status : TodoStatus.PERSISTED;
    return {
      ...t,
      status,
    }
  });
}


// ActionListener
function updateTodoStatus(state: any, action: any) {

}

// ======
// client code(ReactComponent) - TODO
