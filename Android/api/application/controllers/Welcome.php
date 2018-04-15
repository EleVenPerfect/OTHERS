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
		echo json_encode($arr);
	}
}
