filename = 'we.jpg';  
imgData = imread(filename);  
%imshow(imgData);             %�ú�������������ʾ�Ѿ����������  
A = imgData(2600,:);  
plot(A,'-')                 %����ͼ������ 
figure(1);