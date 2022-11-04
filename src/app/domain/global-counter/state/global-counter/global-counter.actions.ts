interface IncrementGlobalCounterPayload {
  incrementBy: number;
  timestamp: number;
}

export class IncrementGlobalCounter {
  static readonly type = '[GlobalCounter] Increment';

  constructor(public payload: IncrementGlobalCounterPayload) { }
}
