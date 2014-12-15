clear all;
close all;
clc;

[y,fs,bit]=wavread('atime.wav');%载入文件

%wavplay( y, fs);        %声音播放
%size(y)                 %求矩阵的行数和列数

y2 =y(:,2);              %取出wav中两列任意一列（双声道？）
y1 =y2(1:4096000);       %截取一部分信号，防止内存不足

n1 =length(y1);          %取y的长度
t1 =(0:n1-1)/fs;         %设置波形图横坐标：总点数除以采样率fs即为实际时间

figure( 1);               %获取一张图纸
subplot( 2, 1, 1);        %在两行一列的图纸的第一个位置画图
plot( t1, y1);            %画出时域波形图
ylabel('幅值');           %设置Y坐标头
xlabel('时间（s）');      %设置X坐标头
title('信号波形');        %设置坐标头

Y1 =fft( y1);             %快速傅立叶变换
w1 =2*( 0:n1-1)/n1;       %设置角频率

subplot( 2, 1, 2);
plot( w1, abs(Y1));       %画频谱图
title('信号频谱');
xlabel('数字角频率');
ylabel('幅度');

grid on;                  %打开网格

%%%%%%%%%%%%%%%%以上为时域频域分析部分%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Fs  =fs;

fp1 =280;
fs1 =450;
wp1 =2*fp1/Fs;
ws1 =2*fs1/Fs;
rp  =0.1;
rs  =60;                                    %DF指标（低通滤波器的通、阻带边界频）

%%%%%%%%%%%%%%%%%%以上为滤波器初值设置%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

[N1,wpo1] =ellipord( wp1, ws1, rp, rs);     %调用ellipord计算椭圆DF阶数N和通带截止频率wp
[B1,A1]   =ellip( N1, rp, rs, wpo1);        %调用ellip计算椭圆带通DF系统函数系数向量B1和A1

figure( 2);
freqz( B1, A1);                             %绘制低通滤波器的幅频和相频特性曲线，用对数坐标表示，以损耗函数的形式表示幅频特性曲线
title('用ellip函数设计的低通滤波器对数幅频和相频曲线');

y1t =filter( B1 ,A1, y1);                   %y1t为原信号st经低通滤波后的信号
Y2  =fft( y1t);                             %fxt1为原信号st经低通滤波后的频域信号

figure( 3);

subplot(2,1,1);
plot(t1,y1t);                               %画时域图
xlabel('t/s');
ylabel('y1(t)');
title('s(t)经"低通"滤波后的波形');

subplot( 2, 1, 2);
plot( w1, abs(Y2));                         %画频谱图
title('信号频谱');
xlabel('数字角频率');
ylabel('幅度');
%%%%%%%%%%%%%%%%%%以上为IIR滤波器的设计实现%%%%%%%%%%%%%%%%%%%%%%%%%

%wavplay(y,fs);

%{
[xn,fs,bits] =wavread('E:\\TEST\MATLAB\main\atime.wav');
x1n=xn(:,1);
%fs =14110*3;
%wavplay( xn, fs);

Tp =180;                %观察时间Tp=180秒
M  =128;                %做FFT变换的点数为64点
Fs =fs;                 %采样频率
Xn =x1n(1:1000);                 %序列

T  =1/Fs;               %采样周期
N  =length(Xn)              %实际采样点数

n  =0:1:N-1;            %采样序列

subplot( 1, 1, 1);
plot( n, Xn);


subplot( 2, 1, 1);
stem( n, xn, '.');
%}