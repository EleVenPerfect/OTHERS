clear;close all
clf;

% h=fspecial('gaussian',9,1);%������˹��ͨ�˲��� %sigma��ȡֵ��������1,2^2, 3^2����
% hsize��ʾģ��ߴ磬Ĭ��ֵΪ[3 3]��sigmaΪ�˲����ı�׼���λΪ���أ�Ĭ��ֵΪ0.5.
% gaussian��ָ��˹�ֲ������˲������ͣ���˹��ͨ�˲�����hsize����ʾ��ģ�壬Ĭ��[3 3],������ʾ����3*3�ľ���sigma�Ǳ�׼ƫ��

I1=imread('shatter11.bmp','bmp'); %I11=double(I11); 
I11=double(GauseHighPass(I1,1)); %��˹��ͨ�˲���
I2=imread('shatter12.bmp','bmp'); %I12=double(I12); 
I12=double(GauseHighPass(I2,1)); %��˹��ͨ�˲���

[width,height]=size(I11);%���ͼƬ�ĳߴ�

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


Phi = -atan2(I15,I13) %������λ
title('����������λ');
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
    
    
    


