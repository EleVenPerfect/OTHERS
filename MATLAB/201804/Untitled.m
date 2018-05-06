clear;close all
clf;

% h=fspecial('gaussian',9,1);%产生高斯低通滤波器 %sigma的取值估可以试1,2^2, 3^2……
% hsize表示模板尺寸，默认值为[3 3]，sigma为滤波器的标准差，单位为像素，默认值为0.5.
% gaussian是指高斯分布，即滤波器类型，高斯低通滤波器。hsize是显示的模板，默认[3 3],所以显示的是3*3的矩阵，sigma是标准偏差

I1=imread('shatter11.bmp','bmp'); %I11=double(I11); 
I11=double(GauseHighPass(I1,1)); %高斯高通滤波器
I2=imread('shatter12.bmp','bmp'); %I12=double(I12); 
I12=double(GauseHighPass(I2,1)); %高斯高通滤波器

[width,height]=size(I11);%获得图片的尺寸

 he=0;
 sumhe=0;
 
for i=1:width
    for j=1:height
        he= sum(I11(i,j).*I11(i,j));
        sumhe=he+sumhe;
    end
end
        norm1 = sqrt(sumhe);
        I13(i,j) = I11(i,j)./norm1;

 he1=0;
 sumhe1=0;
        
for i=1:width
    for j=1:height
        he1 = sum(I12(i,j).*I13(i,j));
        sumhe1=he1+sumhe1;
    end
end
         proj = sumhe1.*I13(i,j);
         I14(i,j) = I12(i,j)-proj;
         
he2=0;
sumhe2=0;
 
 for i=1:width
    for j=1:height
        he2 = sum(I14(i,j).*I14(i,j));
        sumhe2 = he1+sumhe1;
    end
end            
        norm2 = sqrt(sumhe2);
        I15(i,j) = I14(i,j)./norm2;


Phi = -atan2(I15,I13) %包裹相位
title('变形条纹相位');
imshow(Phi');
%figure(1);



% for i=1:width
%     for j=1:height
%         he= sum(I11(i,j).*I11(i,j));
%         sumhe=he+sumhe;
%         norm1 = sqrt(sum(sum(I11(i,j).*I11(i,j))));
%         I13(i,j) = I11(i,j)./norm1;
% 
%         proj = sum(sum(I12(i,j).*I13(i,j))).*I13(i,j);
% 
%         I14(i,j) = I12(i,j)-proj;
%         norm2 = sqrt(sum(sum(I14(i,j).*I14(i,j))));
%         I15(i,j) = I14(i,j)./norm2;
%     end
% end

%         norm1 = sqrt(sum(sum(I11.*I11)));
%         I13 = I11./norm1;
% 
%         proj = sum(sum(I12.*I13)).*I13;
% 
%         I14 = I12-proj;
%         norm2 = sqrt(sum(sum(I14.*I14)));
%         I15 = I14./norm2;
%     end
% end
    
    
    


