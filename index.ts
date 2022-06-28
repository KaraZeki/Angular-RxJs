//--PART 1 SUMMARY RXJS
// import { Observable } from 'rxjs';

import { fromEvent } from 'rxjs';
import { combineLatest } from 'rxjs';

// const interval$ = new Observable<number>((subscriber) => {
//   let sayac = 1;
//   const intervalId = setInterval(() => {
//     console.log('Sayı', sayac);
//     subscriber.next(sayac++);
//   }, 1000);
//   return () => {
//     clearInterval(intervalId);
//   };
// });

// const subscription = interval$.subscribe((value) => {
//   console.log(value);
// });
// setTimeout(() => {
//   console.log('Bitir');
//   subscription.unsubscribe();
// }, 5000);

//--PART 2 --COLD OBSERVABLE

// const ajax$ = ajax<any>(
//   'https://random-data-api.com/api/address/random_address?size=3'
// );

// ajax$.subscribe((data) => {
//   console.log('Subs -1 ', data.response[0].full_address);
// });

// ajax$.subscribe((data) => {
//   console.log('Subs -2 ', data.response[0].full_address);
// });

// ajax$.subscribe((data) => {
//   console.log('Subs -3 ', data.response[0].full_address);
// });

// //--PART 3 --isEmpty
// import { Subject, isEmpty } from 'rxjs';

// const source = new Subject<string>();
// const result = source.pipe(isEmpty());

// source.subscribe((x) => console.log(x));
// result.subscribe((x) => console.log(x));

// source.next('a');
// source.next('b');
// source.next('c');
// source.complete();

//PART 4 combineLatest
const temperature = document.getElementById('exampleInputValue');
const conversation = document.getElementById('exampleFormControlSelect');
const resultText = document.getElementById('result');

const temperatureEvent$ = fromEvent(temperature, 'input');
const conversationEvent$ = fromEvent(conversation, 'input');

combineLatest([temperatureEvent$, conversationEvent$]).subscribe(
  ([temperatureEvent$, conversationEvent$]) => {
    // console.log(
    //   temperatureEvent$.target['value'],
    //   conversationEvent$.target['value']
    // );

    const temperature = Number(temperatureEvent$.target['value']);
    const conversion = conversationEvent$.target['value'];

    let result: number;
    if (conversion === 'f-to-c') {
      result = ((temperature - 32) * 5) / 9;
    } else if (conversion === 'c-to-f') {
      result = (temperature * 9) / 5 + 32;
    }

    resultText.innerHTML = String(result);
  }
);
