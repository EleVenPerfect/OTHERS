<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->model('smart_model','smart');
		$data =$this->smart->getdata();
      	//var_dump($data);
      
		header("Content-Type:text/html;charset=utf-8;");
		$arr = array (
			'snwd'=>$data['snwd'].' ℃',
			'snsd'=>$data['snsd'].' %',
			'ktwd'=>$data['ktwd'].' ℃',
			'ktsd'=>$data['ktsd'].' %',
			'aqjg'=>'一切正常'
			);
		if($data['snwd']>=50)
			$arr['aqjg'] ="室内温度异常！";
		if($data['ktwd']>=50)
			$arr['aqjg'] ="客厅温度异常！";
		if($data['ktwd']>=50&&$data['snwd']>=50)
			$arr['aqjg'] ="室内、客厅温度异常！";

		$json_data = array(
			array(
				"userId"=> 1,
    			"id"=> "室内温度",
    			"title"=> $data['snwd'].' ℃'
				),
			array(
				"userId"=> 2,
    			"id"=> "室内湿度",
    			"title"=> $data['snsd'].' %'
				),
			array(
				"userId"=> 3,
    			"id"=> "客厅温度",
    			"title"=> $data['ktwd'].' ℃'
				),
			array(
				"userId"=> 4,
    			"id"=> "客厅湿度",
    			"title"=> $data['ktsd'].' %'
				),
			array(
				"userId"=> 5,
    			"id"=> "煤气报警",
    			"title"=> $data['mqbj']
				),
			array(
				"userId"=> 6,
    			"id"=> "红外防盗(客厅)",
    			"title"=> $data['hwfd1']
				),
			array(
				"userId"=> 7,
    			"id"=> "红外防盗(卧室)",
    			"title"=> $data['hwfd2']
				),
			array(
				"userId"=> 8,
    			"id"=> "安全信息",
    			"title"=> "无"
				)
			);
		$json_data[8]["title"] = $arr['aqjg'];
		echo json_encode($json_data);
	}
}
