<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesign.css">
    <title>Login</title>
</head>
<body>
<script>
            function isvalid(){
                var email = document.forms[0].email.value;
                var pass = document.forms[0].password.value;
                if(email.length=="" && pass.length==""){
                    alert("Email and password field is empty!!!");
                    return false;
                }
                else if(email.length==""){
                    alert("Email field is empty!!!");
                    return false;
                }
                else if(pass.length==""){
                    alert("Password field is empty!!!");
                    return false;
                }
                
            }
        </script>
      <div class="container">
        <div class="box form-box">
            <?php 
             
              include("connection.php");
              if(isset($_POST['submit'])){
                $email = mysqli_real_escape_string($conn,$_POST['email']);
                $password = mysqli_real_escape_string($conn,$_POST['password']);
                

                $result = mysqli_query($conn,"SELECT * FROM users WHERE Email='$email' AND Password='$password'") or die("Select Error");
                $row = mysqli_fetch_assoc($result);

                if(is_array($row) && !empty($row)){
                    $_SESSION['valid'] = $row['Email'];
                    $_SESSION['username'] = $row['Username'];
                    $_SESSION['id'] = $row['Id'];
                }else{
                    echo "<div class='message'>
                      <p>Wrong Username or Password</p>
                       </div> <br>";
                   echo "<a href='signin.php'><button class='btn'>Go Back</button>";
         
                }
                if(isset($_SESSION['valid'])){
                    header("Location: Home2.html");
                }
              }else{

            
            ?>
            <header>Login</header>
            <form action="" method="post"name="form" >
                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" autocomplete="off" required>
                </div>

                <div class="field input">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="password" autocomplete="off" required>
                </div>

                <div class="field">
                    
                    <input type="submit" class="btn" name="submit" value="Login" required  onclick="isvalid()">
                </div>
                <div class="links">
                    Don't have account? <a href="http://localhost:3000/projectweb/signup.php">Sign Up Now</a>
                </div>
                <div class="links">
                    Update your account <a href="http://localhost:3000/projectweb/Update.php">here</a> or Delete Account <a href="http://localhost:3000/projectweb/delete.php">here</a>
                </div>
            </form>
        </div>
        <?php } ?>
      </div>
</body>
</html>