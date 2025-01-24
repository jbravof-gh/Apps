function checkCondition(value, callback) {
  if (value >= 0) {
    callback('value >= 0');
  } else {
    callback('value < 0');
  }
}

const log = (msg) => console.log(msg);

checkCondition(1, log); // value >= 0
checkCondition(0, log); // value >= 0
checkCondition(-1, log); // value < 0