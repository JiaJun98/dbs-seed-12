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

    public function get_project(){
        $this->db->select("*");
        $this->db->from("employeeprojects");
        $query = $this->db->get();

        return $query->result();
    }

    public function get_claiminfo($id){
        $this->db->select("b.FirstName, b.LastName, a.ProjectID, a.Amount, a.CurrencyID, a.ExpenseDate, a.Purpose");
        $this->db->from("projectexpenseclaims a, employee b");
        $this->db->where("a.EmployeeID = b.EmployeeID");
        $this->db->where("a.ClaimID", $id);
        $query = $this->db->get();

        return $query->result();
    }
}
?>