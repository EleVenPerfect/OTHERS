clear all;
x = 0:0.01:3*pi;
y1 = sin(x);
y2 = sin(2*x);
y3 = sin(3*x);
figure;
plot(x,y1,x,y2,x,y3);%��ͼ���ú�������ı���
axis([0 3*pi -1.5 1.5]);%���ƺ�������ı��
grid on;
xlabel('x');%���������ע
ylabel('y');
title('��ʾ');
legend('sin(x)','sin(2x)','sin(3x)');%����ͼ��