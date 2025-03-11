var i = 0;

while( i <= 5) {
  console.log("Value of i is " +i);
  i = i+1;
}
============================================================
#Without Break

var i = 0;
while( i <= 5) {
  console.log("Value of i is " +i);
  i = i+1;
  if (i == 2) {
    console.log("VALUE OF X :  " +i)
  }
}

============================================================
#With Break

var i = 0;
while( i <= 5) {
  console.log("Value of i is " +i);
  i = i+1;
  if (i == 2) {
    console.log("VALUE NOW  :  " +i)
  }
}
