const wait = ms => new Promise(res => setTimeout(res, ms));
wait(1000).then(() => console.log('done'));
