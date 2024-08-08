<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="stylesign.css">
    <title>Register</title>
</head>
<body>
      <div class="container">
        <div class="box form-box">

        <?php 
         
    include("connection.php");
         if(isset($_POST['submit'])){
            
            $username = $_POST['username'];
            $email = $_POST['email'];
            $password = $_POST['password'];
            $age = $_POST['age'];


          mysqli_query($conn,"INSERT INTO quizApp.users (Username,Email,Password,Age) VALUES('$username','$email','$password','$age');");
          header("Location: Home2.html");
 

         }else
        {
         
        ?>

            <header>Sign Up</header>
            <form action="signup.php" method="post">
                <div class="field input">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" autocomplete="off" required>
                </div>

                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" autocomplete="off" required>
                </div>

                <div class="field input">
                    <label for="age">Age</label>
                    <input type="number" name="age" id="age" autocomplete="off" required>
                </div>
                <div class="field input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" autocomplete="off" required>
                </div>

                <div class="field">
                    
                    <input type="submit" class="btn" name="submit" value="Register" required>
                </div>
                <div class="links">
                    Already a member? <a href="http://localhost:3000/projectweb/signin.php">Sign In</a>
                </div>
            </form>
        </div>
        <?php } ?>
      </div>
</body>
</html>