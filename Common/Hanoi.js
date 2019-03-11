function hanoi(n,a,b,c){
  if(n==1){
    document.write("Move "+n+" from "+a+" to "+c+"</br>");
  }
  else{
    hanoi(n-1,a,c,b);
    document.write("Move "+n+" from "+a+" to "+c+"</br>")
    hanoi(n-1,b,a,c);
  }
}
hanoi(3,"A","B","C");

// 对于汉诺塔问题，我们可以这么理解。
// 三个柱分别代表：A-起始点，B-过渡点，C-目标点，当然随着圆盘数量的增多，在整个移动过程中，A/B/C三点是相互转换的。
// 如果只有两个盘子时，我们将盘子1移动到B，将盘子2移动到C，再将盘子1移动到C，总共为三步。
// 而当有三个盘子时，我们可以考虑最后时刻，盘子3在C点，盘子1/2已经排好在B点，然后只要考虑将B点的盘子依次排到C点即可。
// 两个盘子时总共的步数k=3，那么三个盘子时，则是2*3+1也就是七步。
// 所以归纳起来下一次的步数等于上一次的步数k*2+1，我们以此便可以使用递归来处理n个盘子时的步骤及步数。