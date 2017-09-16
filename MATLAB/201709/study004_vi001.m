clear all;
x = 0:0.01:3*pi;
y1 = sin(x);
y2 = sin(2*x);
y3 = sin(3*x);
figure;
plot(x,y1,x,y2,x,y3);%画图设置亨佐坐标的变量
axis([0 3*pi -1.5 1.5]);%限制横纵坐标的标尺
grid on;
xlabel('x');%设置坐标标注
ylabel('y');
title('演示');
legend('sin(x)','sin(2x)','sin(3x)');%设置图例