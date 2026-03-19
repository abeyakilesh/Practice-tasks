const wait = ms => new Promise(res => setTimeout(res, ms));
wait(1000).than(() => console.log('done'));
