<?php 
    if (isset($_POST['form-name']) && isset($_POST['form-company']) && isset($_POST['form-business']) && isset($_POST['form-email']) && isset($_POST['form-phone']) && isset($_POST['form-comment'])) {
        $name = $_POST['form-name'];
        $company = $_POST['form-company'];
        $business = $_POST['form-business'];
        $email = $_POST['form-email'];
        $phone = $_POST['form-phone'];
        $comment = $_POST['form-comment'];
    
    
        $mysqli = new mysqli('localhost', 'root', '', 'frontier');
        if(mysqli_connect_errno()) {
            prinf("Соединение не установлено", mysql_connect_error());
            exit();
        }

        $mysqli->set_charset('utf8');

        $query = "INSERT INTO feedback VALUES(null, '$name', '$company', $business, $email, $phone, $comment, now())";
        $mysqli->query($query);

        if ($query == true){
            echo "Информация занесена в базу данных";
        }else{
            echo "Информация не занесена в базу данных";
        }

        $mysqli ->close();
        }
?>