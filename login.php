<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>BSCS 3A - Login/Register</title>
  <link rel="stylesheet" href="css/style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
</head>

<body>
  <header>
    <div class="container">
      <div class="logo">
        <h1>BSCS 3A</h1>
      </div>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="login.html" class="active">Login/Register</a></li>
        </ul>
      </nav>
      <div class="menu-toggle">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  </header>

  <section class="page-header">
    <div class="container">
      <h1>Account Access</h1>
    </div>
  </section>

  <section class="auth-section">
    <div class="container">
      <div class="auth-container">
        <div class="auth-tabs">
          <div class="auth-tab active" data-tab="login">Login</div>
          <div class="auth-tab" data-tab="register">Register</div>
        </div>

        <div class="auth-form active" id="login-form">
          <form action="#" method="POST">
            <div class="form-group">
              <label for="login-email">Email</label>
              <input type="email" id="login-email" name="email" required />
            </div>
            <div class="form-group">
              <label for="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                required />
            </div>
            <button type="submit" class="form-submit">Login</button>
          </form>
          <div class="form-footer">
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <div class="auth-form" id="register-form">
          <form action="#" method="POST">
            <div class="form-group">
              <label for="register-first-name">First Name</label>
              <input type="text" id="register-first-name" name="first-name" required />
            </div>
            <div class="form-group">
              <label for="register-last-name">Last Name</label>
              <input type="text" id="register-last-name" name="last-name" required />
            </div>
            <div class="form-group">
              <label for="register-email">Email</label>
              <input type="email" id="register-email" name="email" required />
            </div>
            <div class="form-group">
              <label for="register-student-id">Student ID</label>
              <input
                type="text"
                id="register-student-id"
                name="student_id"
                required />
            </div>
            <div class="form-group">
              <label for="register-password">Password</label>
              <input
                type="password"
                id="register-password"
                name="password"
                required />
            </div>
            <div class="form-group">
              <label for="register-confirm-password">Confirm Password</label>
              <input
                type="password"
                id="register-confirm-password"
                name="confirm_password"
                required />
            </div>
            <button type="submit" class="form-submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <p>&copy; 2023 BSCS 3A. All rights reserved.</p>
    </div>
  </footer>

  <script src="js/script.js"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const tabs = document.querySelectorAll(".auth-tab");
      const forms = document.querySelectorAll(".auth-form");

      tabs.forEach((tab) => {
        tab.addEventListener("click", function() {
          const target = this.dataset.tab;

          // Update active tab
          tabs.forEach((t) => t.classList.remove("active"));
          this.classList.add("active");

          // Show corresponding form
          forms.forEach((form) => form.classList.remove("active"));
          document.getElementById(`${target}-form`).classList.add("active");
        });
      });
    });
  </script>
</body>

</html>