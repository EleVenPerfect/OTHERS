filename = 'we.jpg';  
imgData = imread(filename);  
%imshow(imgData);             %该函数可以用来显示已经读入的数据  
A = imgData(2600,:);  
plot(A,'-')                 %画出图像数据 
figure(1);