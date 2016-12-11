
module AD7606_ctr(
    input           led_clk_i,      //system clock
	 input			  adc_range,
	 
    //IP control and data interface
    output  reg     wr_data_n_i,     // active low signal to initiate a data write to the ADC
	 output	reg	  rst_ctrl_o,	
    output  reg     [15:0] data_i           // channel[7:5], os[4:2],standby[1],range[0]
);

reg [2:0] once =0;

always @(posedge led_clk_i)
begin
	case(once)
		0:		//初始化
		begin
			data_i <=16'h2;
			wr_data_n_i <=1;
			rst_ctrl_o <=0;
			once <=once+1;
		end
		1:
		begin
			data_i <=16'h2;
			wr_data_n_i <=1;
			rst_ctrl_o <=1;
			once <=once+1;
		end
		2:
		begin
			data_i <=16'h2;
			wr_data_n_i <=1;
			rst_ctrl_o <=1;
			once <=once+1;
		end
		3:
		begin
			data_i <=16'h2;
			wr_data_n_i <=1;
			rst_ctrl_o <=1;
			once <=once+1;
		end
		4:
		begin
			wr_data_n_i <= 0;
			rst_ctrl_o <= 1;
			if(adc_range)
				data_i <= 16'b000_010_10;
			else
				data_i <= 16'b000_010_10;
			//开始AD转换
			once <=once+1;
		end
		
		5:
		begin
			if(adc_range)
				data_i <= 16'b000_010_10;
			else
				data_i <= 16'b000_010_10;
			wr_data_n_i <=1;
			rst_ctrl_o <=1;
			once <=3'd5;
		end
		default:
		begin
			data_i <=16'h2;
			wr_data_n_i <=1;
			rst_ctrl_o <=1;
			once <=once+1;
      end
	endcase
end



endmodule
