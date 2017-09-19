t = (1/8:1/4:1)'*2*pi;
x = sin(t);
y = cos(t);
H = fill(x,y,'r');
axis square
set(H,'LineWidth',5)
set(gcf,'color','w','Position',[400,350,250,150],'MenuBar','none');
set(gca,'Visible','off')