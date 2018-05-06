function HighPass=GauseHighPass(ima,Do) 
% �����Ĺ���Ϊ��ʵ�ָ�˹��ͨ�˲�ԭ�� 
%             H(u,v)=1-exp(-D(u,v)^2/(2*Do^2)); sigma=Do,imaΪԴͼ��sigma�Ǳ�׼ƫ��
[Row,Col]=size(ima); 
ima=im2double(ima); 
for ix=1:Row %�˲����Ļ� 
    for iy=1:Col 
            ima(ix,iy)=(-1)^(ix+iy)*ima(ix,iy); 
    end 
end  
FourIma=fft2(ima);%���ı任��ĸ���Ҷ�任 
[FRow,FCol]=size(FourIma); 
 
for u=1:FRow%Do�ĸ�˹��ͨ�˲��� 
    for v=1:FCol 
        D(u,v)=[(u-Row/2)^2+(v-Col/2)^2]^0.5; 
        factc=-D(u,v)^2/(2*Do^2); 
        H(u,v)=1-exp(factc); 
        G(u,v)=H(u,v)*FourIma(u,v); 
    end 
end 
IFourIma=ifft2(G);%��˹��ͨ�˲���ķ�����Ҷ�任 
for ix=1:FRow %������Ҷ�任��*(-1)^(x+y)��ȡʵ�� 
    for iy=1:FCol 
        HighPass(ix,iy)=(-1)^(ix+iy)*IFourIma(ix,iy);     
    end  
end  
HighPass=real(HighPass);
