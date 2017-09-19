t = -pi/2:pi/18:pi/2;
r = ones(size(t));
[x,y] = pol2cart(t,r);
subplot(1,2,1),compass(x,y),title('compass')
subplot(1,2,2),feather(x,y),title('feather')