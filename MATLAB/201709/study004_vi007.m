clf;
x = -2:2
Y = [3,5,2,4,1;
     3,4,5,2,1;
     5,4,3,2,5]
Cum_Sum = cumsum(Y)
area(x',Y',0)
legend('ÒòËØA','ÒòËØB','ÒòËØC')
grid on
colormap(spring)