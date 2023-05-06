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


   public function claiminfo_get(){
    //list data method
    //echo "This is GET Method";
    $data = json_decode(file_get_contents("php://input"));
    if(isset($data->id)){
        $claim_id = $data->id;
    }
    else{
        $claim_information = array("Unable to reteive claim information");
        $this->response($claim_information, REST_Controller::HTTP_NOT_FOUND);
    }
    $claim_inform = $this->claims_model->get_claiminfo($claim_id);

    $claim_information = array("Unable to reteive claim information");

    if(count($claim_inform)>0){
        $claim_information = $claim_inform;
        $this->response($claim_information, REST_Controller::HTTP_OK);
    }
    else{
        $this->response($claim_information, REST_Controller::HTTP_NOT_FOUND);
    }
}
}

?>