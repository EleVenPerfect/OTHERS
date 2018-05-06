function HighPass=GauseHighPass(ima,Do) 
% 本函的功能为：实现高斯高通滤波原理 
%             H(u,v)=1-exp(-D(u,v)^2/(2*Do^2)); sigma=Do,ima为源图像，sigma是标准偏差
[Row,Col]=size(ima); 
ima=im2double(ima); 
for ix=1:Row %滤波中心化 
    for iy=1:Col 
            ima(ix,iy)=(-1)^(ix+iy)*ima(ix,iy); 
    end 
end  
FourIma=fft2(ima);%中心变换后的傅立叶变换 
[FRow,FCol]=size(FourIma); 
 
for u=1:FRow%Do的高斯高通滤波器 
    for v=1:FCol 
        D(u,v)=[(u-Row/2)^2+(v-Col/2)^2]^0.5; 
        factc=-D(u,v)^2/(2*Do^2); 
        H(u,v)=1-exp(factc); 
        G(u,v)=H(u,v)*FourIma(u,v); 
    end 
end 
IFourIma=ifft2(G);%高斯高通滤波后的反傅立叶变换 
for ix=1:FRow %反傅立叶变换后*(-1)^(x+y)并取实部 
    for iy=1:FCol 
        HighPass(ix,iy)=(-1)^(ix+iy)*IFourIma(ix,iy);     
    end  
end  
HighPass=real(HighPass);
