//--PART 1 SUMMARY RXJS
// import { Observable } from 'rxjs';

import { ajax } from 'rxjs/ajax';

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

const ajax$ = ajax<any>(
  'https://random-data-api.com/api/address/random_address?size=3'
);

ajax$.subscribe((data) => {
  console.log('Subs -1 ', data.response[0].full_address);
});

ajax$.subscribe((data) => {
  console.log('Subs -2 ', data.response[0].full_address);
});

ajax$.subscribe((data) => {
  console.log('Subs -3 ', data.response[0].full_address);
});
