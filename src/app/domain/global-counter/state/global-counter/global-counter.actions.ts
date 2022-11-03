export class IncrementGlobalCounter {
  static readonly type = '[GlobalCounter] Increment';
  constructor(public incBy: number) { }
}
