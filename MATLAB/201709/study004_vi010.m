clf
rand('state',111)
n = 30;
a = rand(n,1)-0.5;
b = rand(n,1)-0.5;
t = delaunay(a,b);
t = [t t(:,1)];
voronoi(a,b)
hold on
axis square
fill(a(t(10,:)),b(T(10,:)),'y');
voronoi(a,b)
