import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

interface TmplContext<T> {
  value: T;
  $implicit: T;
}

@Component({
  selector: 'app-stream-container',
  templateUrl: './stream-container.component.html',
})
export class StreamContainerComponent<T> implements OnInit {

  @Input()
  stream!: Observable<T>;

  @ContentChild(TemplateRef)
  template!: TemplateRef<TmplContext<T>>;

  ngOnInit(): void { }

}
