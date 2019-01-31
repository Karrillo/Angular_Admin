import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

    this.count().then(
      () => console.log('Termino')
    ).catch( error => console.error('Error in the promises'));

  }

  ngOnInit() {
  }

  count(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      let temp = 0;

      const interval = setInterval(() => {

        temp += 1;
        if (temp === 3) {
          temp = 0;
          resolve(true);
          clearInterval(interval);
        }

      }, 1000); // time on promises
    });

  }

}
