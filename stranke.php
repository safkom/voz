<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "voz";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Login logic
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        // Retrieve hashed password from database
        $sql = "SELECT geslo FROM uporabniki WHERE mail='$email'";
        $result = $conn->query($sql);

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $hashed_password = $row['geslo'];
            
            // Verify password
            if (password_verify($password, $hashed_password)) {
                $_SESSION['loggedin'] = true;
                header("Location: ".$_SERVER['PHP_SELF']);
                exit();
            } else {
                echo "Invalid email or password!";
            }
        } else {
            echo "Invalid email or password!";
        }
    }
}

// Display orders if logged in
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
    $sql = "SELECT narocila.*, stranke.mail, stranke.telefon FROM narocila JOIN stranke ON narocila.id = stranke.narocilo_id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<h2>Orders from Customers</h2>";
        echo "<table border='1'>";
        echo "<tr><th>ID</th><th>Size</th><th>Cutter</th><th>Laser</th><th>Accessories</th><th>Customer Email</th><th>Customer Phone</th></tr>";
        while($row = $result->fetch_assoc()) {
            echo "<tr><td>".$row["id"]."</td><td>".$row["velikost"]."</td><td>".$row["rezkar"]."</td><td>".$row["laser"]."</td><td>".$row["dodatki"]."</td><td>".$row["mail"]."</td><td>".$row["telefon"]."</td></tr>";
        }
        echo "</table>";
    } else {
        echo "No orders found.";
    }
} else {
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">
        <label>Email:</label><br>
        <input type="text" name="email"><br>
        <label>Password:</label><br>
        <input type="password" name="password"><br><br>
        <input type="submit" name="login" value="Login">
    </form>
</body>
</html>
<?php
}

$conn->close();
?>
