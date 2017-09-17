t = 0:pi/50:2*pi;
r = cos(t).*sin(t);
figure(1);
plot(t,r,'-*');
figure(2);
polar(t,r,'-*');