#------------------GLOBAL--------------------#
set_global_assignment -name RESERVE_ALL_UNUSED_PINS "AS INPUT TRI-STATED"
#set_global_assignment -name ENABLE_INIT_DONE_OUTPUT OFF

#复位引脚
set_location_assignment	PIN_E16	-to ext_rst_n

#时钟引脚
set_location_assignment	PIN_E15	-to ext_clk

#LED对应的引脚
set_location_assignment	PIN_J13	-to led

#ADC7606引脚配置
set_location_assignment PIN_E6 -to adc_os[2]
set_location_assignment PIN_A11 -to adc_os[1]
set_location_assignment PIN_D5  -to adc_os[0]

set_location_assignment PIN_C6 -to adc_rage

set_location_assignment PIN_G5 -to adc_cva
set_location_assignment PIN_C8 -to adc_cvb

set_location_assignment PIN_F8 -to adc_rd

set_location_assignment PIN_C2 -to adc_rst

set_location_assignment PIN_E9 -to adc_busy

set_location_assignment PIN_F2 -to adc_cs

set_location_assignment PIN_D9 -to adc_frst
set_location_assignment PIN_G2 -to adc_vio


set_location_assignment PIN_B3 -to adc_db[0]
set_location_assignment PIN_B9 -to adc_db[1]
set_location_assignment PIN_E7 -to adc_db[2]
set_location_assignment PIN_B10 -to adc_db[3]
set_location_assignment PIN_C3 -to adc_db[4]
set_location_assignment PIN_B11 -to adc_db[5]
set_location_assignment PIN_D3 -to adc_db[6]
set_location_assignment PIN_E8 -to adc_db[7]
set_location_assignment PIN_F3 -to adc_db[8]
set_location_assignment PIN_D8 -to adc_db[9]
set_location_assignment PIN_B1 -to adc_db[10]
set_location_assignment PIN_F9 -to adc_db[11]
set_location_assignment PIN_D1 -to adc_db[12]
set_location_assignment PIN_C9 -to adc_db[13]
set_location_assignment PIN_F1 -to adc_db[14]
set_location_assignment PIN_C11 -to adc_db[15]
