clear,clf;
zeta2 = [0.1 0.2 0.3 0.4 0.5 0.6 0.8 1.0];
n = length(zeta2)
for k = 1:n
    Num{k,1} = 1;
    Den{k,1} = [1 2*zeta2(k) 1];
end
s = tf(Num.Den)
t = (0:0.4:30)';