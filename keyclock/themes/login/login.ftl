<!DOCTYPE html>
<html>
<head>
  <title>My Login</title>
</head>
<body>
  <h2>Custom Login</h2>

  <form action="${url.loginAction}" method="post">
    <input type="text" name="username" placeholder="Username" />
    <input type="password" name="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</body>
</html>