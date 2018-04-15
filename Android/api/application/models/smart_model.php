<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * 文件名首字母要大写
 */
class smart_model extends CI_Model{
	/**
	 * 查询数据
	 */
	public function getdata(){
		$msid =$this->db->get_where('smarthome', array('num'=>'1'))->result_array();
		$data =array(
				'num' =>$msid[0]['num'],
				'snwd'=>$msid[0]['snwd'],
				'snsd'=>$msid[0]['snsd'],
				'ktwd'=>$msid[0]['ktwd'],
				'ktsd'=>$msid[0]['ktsd']
			);
		return $data;
	}


}