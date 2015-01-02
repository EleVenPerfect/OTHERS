library ieee;
use ieee.std_logic_1164.all;

entity jiaotong is
	port (clk,i,j,k:in std_logic;
		rm,ym,gm,rf,yf,gf:out std_logic);
end jiaotong;

architecture arc of jiaotong is
	type state_type is (a,b,c,d);
	signal state:state_type;
	signal x:std_logic_vector(0 to 2); begin
	x<=i&j&k;
cnt:process (clk)
	variable s:integer range 0 to 29;
	variable n:integer range 0 to 49;
	variable nclr,en:bit;
begin
	if	  x<="001" then n:=10;
	elsif x<="010" then n:=15;
	elsif x<="100" then n:=20;
	else n:=0;
	end if;
	
	if (clk'event and clk='1') then 
	if nclr='0' then s:=0;
	elsif en='0' then s:=s;
	else s:=s+1;
	end if;
	
	case state is
	when a =>rm<='0';ym<='0';gm<='1'; rf<='1';yf<='0';gf<='0'; 
	if s=n then state<=b;nclr:='0';en:='0';
	else state<=a;nclr:='1';en:='1';
	end if;
	
	when b=>rm<='0';ym<='1';gm<='0'; rf<='1';yf<='0';gf<='0';
	if s=3 then state <=c;nclr:='0';en:='0';
	else state<=b;nclr:='1';en:='1';
	end if;
	
	when c=>rm<='1';ym<='0';gm<='0'; rf<='0';yf<='0';gf<='1';
	if s=n then state<=d;nclr:='0';en:='0';
	else state<=c;nclr:='1';en:='1';
	end if;
	
	when d=>rm<='1';ym<='0';gm<='0';rf<='0';yf<='1';gf<='0';
	if s=3 then state <=a;nclr:='0';en:='0';
	else state<=d;nclr:='1';en:='1';
	end if;
	
	end case;
	end if;
	
end process cnt;
end arc;
