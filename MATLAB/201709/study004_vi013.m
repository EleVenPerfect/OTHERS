x = -1:.2:1;
y = x;
[X Y] = meshgrid(x,y);
Z = sqrt(4-X.^2-Y.^2)+eps;
mesh(X,Y,Z)