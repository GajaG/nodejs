console.log('Starting app');

setTimeout(()=> console.log('timeout1'),2000);
setTimeout(()=> console.log('timeout2'),0);

console.log('Ending app');