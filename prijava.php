<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Login</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
    }

    .container {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        animation: fadeIn 0.5s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }

    input[type="text"],
    input[type="password"],
    input[type="submit"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 3px;
        box-sizing: border-box;
    }

    input[type="submit"] {
        background-color: #007bff;
        color: #fff;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    input[type="submit"]:hover {
        background-color: #0056b3;
    }

    .error-message {
        color: red;
        margin-bottom: 10px;
    }
</style>
</head>
<body>

<div class="container">
    <h2>Login</h2>
    <?php
    require_once "info/baza.php";
    // Process login
    if ($_SERVER["REQUEST_METHOD"] == "POST") {// Validate login credentials (for demonstration purpose, you should use secure authentication methods)
        if(isset($_POST['email']) && isset($_POST['password'])){
        $email = $_POST['email'];
        $password = $_POST['password'];
        $sql = "SELECT * FROM uporabniki WHERE mail = '$email'";
        $result = $conn->query($sql);
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row['geslo'])) {
                // Set session variables
                session_start();
                $_SESSION["loggedin"] = true;
                $_SESSION["id"] = $row['id'];
                $_SESSION["email"] = $row['mail'];
                $_SESSION["ime"] = $row['ime'];
                $_SESSION["priimek"] = $row['priimek'];
                $_SESSION["admin"] = $row['admin'];
                // Redirect to dashboard or home page upon successful login
                header("Location: vozek.php");
                exit;
            } else {
                // Display error message for incorrect credentials
                echo '<p class="error-message">Napačni email ali geslo. Poskusi znova.</p>';
            }
        } else {
            // Display error message for non-existing email
            echo '<p class="error-message">Napačni email ali geslo. Poskusi znova.</p>';
        }
    }
    }
    ?>
    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label>Email:</label>
        <input type="text" name="email" required><br>
        <label>Geslo:</label>
        <input type="password" name="password" required><br><br>
        <input type="submit" name="login" value="Login">
    </form>
</div>

</body>
</html>
