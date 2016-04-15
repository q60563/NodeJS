var i = 0;
while (true) {           //首先判斷條件是否成立
  console.log(i);        //如果成立執行以下功能
  if(i===5) break;       //寫下判斷是判斷何時跳出迴圈
  i+=1;
}

do {
  console.log(i);        //先執行以下功能
  if(i===0) break;
  i-=1;
} while (true);         //再判斷條件是否成立
