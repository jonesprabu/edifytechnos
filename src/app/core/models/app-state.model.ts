import { BehaviorSubject, Observable } from "rxjs";

export class AppState<T> {

  /**
   * App State Object
   */
  private readonly subject: BehaviorSubject<T>;
  readonly $: Observable<T>;
  get value(): T {
    return this.subject.getValue();
  }
  set value(val: T) {
    this.subject.next(val);
  }

  constructor(data: T) {
    this.subject = new BehaviorSubject<T>(data);
    this.$ = this.subject.asObservable();
  }
}
