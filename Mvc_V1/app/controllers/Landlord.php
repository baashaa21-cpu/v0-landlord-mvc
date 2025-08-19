<?php
class Landlord extends Controller {
    public function __construct() {
        $this->userModel = $this->model('M_Users');
        // Check if user is logged in and is a landlord
        if (!isLoggedIn() || $_SESSION['user_type'] !== 'landlord') {
            redirect('users/login');
        }
    }

    public function index() {
        $this->dashboard();
    }

    public function dashboard() {
        $data = [
            'title' => 'Landlord Dashboard',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_dashboard', $data);
    }

    public function properties() {
        $data = [
            'title' => 'My Properties',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_properties', $data);
    }

    public function add_property() {
        $data = [
            'title' => 'Add Property',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_add_property', $data);
    }

    public function maintenance() {
        $data = [
            'title' => 'Maintenance Requests',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_maintenance', $data);
    }

    public function inquiries() {
        $data = [
            'title' => 'Tenant Inquiries',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_inquiries', $data);
    }

    public function payment_history() {
        $data = [
            'title' => 'Payment History',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_payment_history', $data);
    }

    public function feedback() {
        $data = [
            'title' => 'Tenant Feedback',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_feedback', $data);
    }

    public function notifications() {
        $data = [
            'title' => 'Notifications',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_notifications', $data);
    }

    public function settings() {
        $data = [
            'title' => 'Settings',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_settings', $data);
    }

    public function income() {
        $data = [
            'title' => 'Income Reports',
            'user_name' => $_SESSION['user_name']
        ];
        $this->view('landlord/v_income', $data);
    }
}
?>
