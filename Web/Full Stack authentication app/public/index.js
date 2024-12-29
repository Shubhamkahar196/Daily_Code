async function signup(){
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;

    const response = await axios.post("http://localhost:3000/signup",{
        username: username,
        password: password
    })
    alert("sign up successfully");
}


async function signin(){
    const username = document.getElementById("signin-username").value;
    const password = document.getElementById("signin-password").value;
    const response = await axios.post("http://localhost:3000/signin",{ 
      username: username, 
      password: password 
    });
    localStorage.setItem("token",response.data.token);
    alert("signed in successfully");
    getUserInformation();
  }
  
  async function getUserInformation(){
    const token = localStorage.getItem("token");
    if(token){
      const response = await axios.get("http://localhost:3000/me",{ 
        headers: { 
          Authorization: token 
        } 
      });
      document.getElementById("information").innerHTML = response.data.username;
    }
  }
  

  

async function logout(){
    localStorage.removeItem("token");
    alert("You are logged out");
    window.location.reload();
}




  