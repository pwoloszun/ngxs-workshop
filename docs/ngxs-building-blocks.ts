interface Action { // events
  type: string;
  // [key: string]: any;
  payload?: any;
}

const action2: Action = {
  type: '[DashboardPage] FetchProjectsSuccess',
  payload: [
    { id: 123, name: 'some project' }
  ]
}


// FSA = Flux Standard Action

class Store {
  dispatch(action: Action) { /*...*/ }
  subscribe(listenerFn: () => void) { /*...*/ }
  getState(): any { /*...*/ }
}


// =======
// in app:
const store = new Store();

// design state shape
// global app state
const state = {

  // e-commerce example
  // user: {},
  // catalog: {},
  // cart: {},
  // account: {},
  // ordersHistory: {},
  // admin: {},



  gggHhh: { // state slice
    value: 997,
  },

  users: { // users state slice

    entities: [],
    count: 123
  },

  todos: [] //state slice
};


// in client code: Component/service/etc
const action = {
  type: '[DashboardPage] UserFetchRequest',
  payload: {
    userid: 123
  }
}; // "event"

store.dispatch(action);





// action listeners(s)

// action listener: UserActionListener
function updateUsersFlow(ctx: any, action: any) {
  const state = ctx.getState();
  const nextState = {
    ...state,
    entities: [...state, 123]

  };
  return nextState;
}

// action listener: CounterActionListener
function incrementCounterWhenUserFetchFlow(ctx: any, action: any) {
  const state = ctx.getState();
  value: state.value + 1
  const nextState = {};
  return nextState;
}

// some Store private impl
function rootReducer(state: any, action: any) {
  const nextCounterState = updateUsersFlow(state.counter, action);
  const nextUsersState = incrementCounterWhenUserFetchFlow(state.users, action);

  const nextAppState = {
    ...state,
    users: nextUsersState,
    counter: nextCounterState,
  };
  return nextAppState;
}



// client code - Components

// Counter component
store.subscribe(() => {
  const state = store.getState();
  //do smth modufy local cmp state
});

// // Todos component
store.subscribe(() => {
  const state = store.getState();
  //do smth
});
