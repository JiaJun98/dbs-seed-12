<?php
class Claims_model extends CI_Model{
    public function __construct(){
        parent::__construct();
        $this->load->database();
    }

    public function get_currency(){
        $this->db->select("*");
        $this->db->from("currency");
        $query = $this->db->get();

        return $query->result();
    }
}
?>