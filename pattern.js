// 5 star in one line
for(let i=1; i<=5;i++){
  document.write("&nbsp;");
  for(let j=1; j<=5;j++){
      document.write("*");

}}


//// pattern 5        *****  Square pattern
for(let i=1;i<=5;i++){

for(let j=1; j<=5;j++){
   document.write("*");
}
    document.write("<br/>");
}



// // pattern *--> *****  1 to 5 incremental
for (let i =1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    document.write("*");
  }
  document.write("<br/>");
}



// //  Deacremental 5to 1      ***** ---> *
for(let i=1;i<=5;i++){

    for(let j=1; j<=5;j++){         /*j<=i star incremental  */
        if(j>=i)
       document.write("*");
    }
        document.write("<br/>");
    }



for (let i = 1; i <= 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write("&nbsp;");
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    document.write("*");
  }
  document.write("<br/>");
}

// // Reverse Pyramid
for (let i = 5; i >= 1; i--) {
for (let j = 5; j > i; j--) {
    document.write("&nbsp;");
}
for (let k = 1; k <= 2 * i - 1; k++) {
    document.write("*");
}
document.write("<br/>");
}

// this also print the * for decremental order
  let i,j,k;

  for(i=1;i<=5;i++){

      for(k=1;k<=(5-i);k++){

        }  for(j=1;j<=i;j++){
              document.write( "*");
          }
          document.write("<br/>");
      }
  for (let i = 5; i >= 1; i--)
      for (let i = 5; i >= 1; i--) {
      for (let j = 5; j > i; j--) {
          document.write("&nbsp;");
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
          document.write("*");
      }
      document.write("<br/>");
      }

// Ston pattern (pyramid)   20/3/24
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j > i; j--) {
    document.write("&nbsp;");
  }
  if (i < 5) {
    for (let k = 1; k <= 2 * i - 1; k++) {
      document.write(i -1);
    }
    document.write("<br/>");
  }
}

for (let i = 5; i >= 1; i--) {
  for (let j = 5; j > i; j--) {
    document.write("&nbsp;");
  }
  if (i <= 5) {
    for (let k = 1; k <= 2 * i - 1; k++) {
      document.write(i - 1);
    }
    document.write("<br/>");
  }
}




  //19/3/24
const rows = 5;         
for (let i = rows; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= rows; j++) {
    for (let k = 0; k < rows - i; k++) {
      row += "  ";
    }

    for (let l = 0; l < i; l++) {
      row += ` *  `;
    }

    for (let m = 0; m < rows - i; m++) {
      row += "  ";
    }

    row += "  ";
  }
  console.log(row);
}


// Print  in to the console    
// const rows = 5;
// for (let i = rows; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= rows; j++) {
//     for (let k = 0; k < rows - i; k++) {
//       row += "  ";
//     }
//     if (i < 2) {
//       for (let l = 0; l < i; l++) {
//         row += ` 5  `;
//       }
//     } else {
//       for (let l = 0; l < i; l++) {
//         row += ` *  `;
//       }
//     }
//     for (let m = 0; m < rows - i; m++) {
//       row += "  ";
//     }

//     row += "  ";
//   }
//   console.log(row);
// }














