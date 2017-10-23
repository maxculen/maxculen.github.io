  var user = {
    validateCredentials: function (username, password) {
      return (
          (!(username += '') || username === '') ? { error: "No Username Given.", field: 'name' }
        : (!(username += '') || password === '') ? { error: "No Password Given.", field: 'pass' }
        : (username.length < 3)                  ? { error: "Username is less than 3 Characters.", field: 'name' }
        : (password.length < 4)                  ? { error: "Password is less than 4 Characters.", field: 'pass' }
        : (!/^([a-z0-9-_]+)$/i.test(username))   ? { error: "Username contains invalid characters.", field: 'name' }
        : false
      );
    }
  };

  var results = user.validateCredentials('Nijikokun','somepassword');
  console.log(results);
