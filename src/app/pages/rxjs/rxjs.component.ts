import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.backObserver().pipe( retry(3) )
    .subscribe(
      num => console.log('Subs', num),
      error => console.error('Error in the Observer', error),
      () => console.log('Observer completed!')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // console.log('page closed');
    this.subscription.unsubscribe();
  }
  // Observable
  backObserver(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {

      let temp = 0;

      const intervalo = setInterval( () => {

        temp += 1;

        const exit = {
          value: temp
        };

        observer.next( exit );

        /*
        if (temp === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        if (temp > 3) {
          clearInterval(intervalo);
          observer.error('Error in the observer!!');
        }
        */
      }, 1000);
    }).pipe( // map return value
      map(resp => {
        return resp.value;
      }), // filter
      filter( (value, index) => {
        // console.log('Filters', value, index);
        if ( (value % 2) === 1 ) {
          // odd
          return true;
        } else {
          // even
          return false;
        }
      })
    );
  }

}
