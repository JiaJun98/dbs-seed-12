<?php
require (APPPATH.'/libraries/REST_Controller.php');
require (APPPATH.'libraries/Format.php');

// use namespace
use Restserver\Libraries\REST_Controller;

class Expenses extends REST_Controller{
    public function __construct(){
        parent::__construct();
        //load database
        $this->load->database();
        $this->load->model(array("api/claims_model"));
        $this->load->library("form_validation");
    }

   // GET: <project url>/index.php/api/student
   public function currencies_get(){
        //list data method
        //echo "This is GET Method";

        $currencies = $this->claims_model->get_currency();

        $currencies_list = array();

        if(count($currencies)>0){
            $currencies_list = $currencies;
            $this->response($currencies_list, REST_Controller::HTTP_OK);
        }
        else{
            $this->response($currencies_list, REST_Controller::HTTP_NOT_FOUND);
        }
   }
}

?>