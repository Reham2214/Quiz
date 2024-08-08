
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="stylesign.css">
    <title>Change Profile</title>
</head>
<body>

    <div class="container">
        <div class="box form-box">
            <?php 
            include("connection.php");
               if(isset($_POST['submit'])){
                $username = $_POST['username'];
                $email = $_POST['email'];
              
             

                $edit_query = mysqli_query($conn,"UPDATE quizApp.users SET Username='$username', Email='$email' WHERE Email='$email' ") or die("error occurred");

                if($edit_query){
                    echo "<div class='message'>
                    <p>Profile Updated!</p>
                </div> <br>";
              echo "<a href='Home2.html'><button class='btn'>Go Home</button></a>";
       
                }
               }

            ?>
            <header>Change Profile</header>
            <form action="" method="POST">
                <div class="field input">
                    <label for="username">Username</label>
                    <input type="text" name="username" id="username" autocomplete="off" required>
                </div>

                <div class="field input">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email"  autocomplete="off" required>
                </div>

                <div class="field">
                    
                    <input type="submit" class="btn" name="submit" value="Update" required>
                </div>
                
            </form>
        </div>
      </div>