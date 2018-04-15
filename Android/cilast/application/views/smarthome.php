<?php
defined('BASEPATH') OR exit('No direct script access allowed');
?>
<?php
	function response_data($data){
		$data = {"snwd":"20"}
		$this->output->set_header('Content-Type: application/json; charset=utf-8');
		echo json_encode($data);
	}
?>