// this code is for 12-hours format
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let session = "";

  if (hh == 0) {
    hh = 12;
    session = "AM";
  }
  if (hh > 12) {
    hh = hh - 12; // becoz of this line we get 12-hours format
    session = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  document.getElementById("hour").innerText = hh + ":";
  document.getElementById("minute").innerText = mm + ":";
  document.getElementById("second").innerText = ss + " " + session;
  let t = setTimeout(function () {
    currentTime();
  }, 1000);
}
currentTime();
