clear all
close all
clc

result = uint8(zeros(256*140,256*148,3));

for i=1:148
    for j=1:140
        tmpname = ['X' num2str(i-1) 'Y' num2str(j-1) '.jpg'];
        tmp = imread(tmpname);
        s=size(tmp);
        result((j-1)*256+1:(j-1)*256+1+s(2)-1,(i-1)*256+1:(i-1)*256+1+s(1)-1,:)=tmp(:,:,:);
        i=i
        j=j
    end
end

imshow(uint8(result));

imwrite(uint8(result),'Z.jpg');