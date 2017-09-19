clear
x = -5:.5:5;
y = x;
[X, Y] = meshgrid(x,y);
Z = sqrt(3.*(X.^2+Y.^2))+eps;
mesh(X,Y,Z)