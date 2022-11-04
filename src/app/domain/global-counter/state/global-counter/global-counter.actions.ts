interface IncrementGlobalCounterPayload {
  incrementBy: number;
}

export class IncrementGlobalCounter {
  static readonly type = '[GlobalCounter] Increment';

  constructor(public payload: IncrementGlobalCounterPayload) { }
}
