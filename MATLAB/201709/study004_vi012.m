x = -8:.25:8;
y = x;
[X,Y] = meshgrid(x,y);
R = sqrt(X.^2+Y.^2)+eps;
Z = sin(R)./R;
subplot(1,3,1)
mesh(Z)
title('mesh(Z)');
subplot(1,3,2)
meshc(Z)
title('meshc(Z)');
subplot(1,3,3)
meshz(Z)
title('meshz(Z)');