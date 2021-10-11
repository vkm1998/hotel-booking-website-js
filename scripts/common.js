function store() {
    var Username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    localStorage.setItem(Username, password);
  }
  function loginM() {
    store();
    var Username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (Username == "admin" && password == "admin") {
      window.alert("Login Successful");
      console.log(document.getElementById("login").innerHTML);
      document.getElementById("login").innerHTML = "LOGOUT";
      document.getElementById("login").setAttribute("data-toggle", "none");
    }
  }
  function logout() {
    var data = document.getElementById("logout-button");
    if (data.innerHTML == "LOGOUT") {
      data.innerHTML = "LOGIN";
      data.setAttribute("data-toggle", "modal");
      document.getElementById("close").setAttribute("data-dismiss","modal");
      localStorage.clear();
    }
  }
  function header() {
    let headerTemplate = ` <header class="header-footer">
    <a href="index.html" class="logo">
        <img src="assests/images/logo.png" id="logo-image" alt="logo"/>
    </a>
    <button  type="button" id="login" class="btn btn-light btn-sm" data-toggle="modal" data-backdrop="false" data-target="#login-modal">LOGIN</button>

    <div class="modal fade" id="login-modal" tabindex="-1" role="dialog" aria-labelledby="login-modal-label" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="login-modal-label">Please Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="login-form">
                        <div class="login-field">
                            <label for="username">Username: </label>
                            <input type="text" id="username" name="username" placeholder="Enter Username" required />
                        </div>
                        <div class="login-field">
                            <label for="password">Password: </label>
                            <input type="password" id="password" name="password" placeholder="Enter Password" required />
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button onclick="loginM()" id="login-button" type="button" class="btn btn-primary" data-dismiss="modal">Login</button>
                </div>
            </div>
        </div>
    </div>
</header>`;
    document.getElementById("header-footer").innerHTML = headerTemplate;
  }
  header();
  function footer() {
    let footerTemplate = ` <footer class="header-footer">
    <div id="contact">
        <button type="button" class="btn btn-info btn-sm" data-toggle="modal" data-backdrop="false" data-target="#contact-modal">Contact Us</button>
        
        <div class="modal fade" id="contact-modal" tabindex="-1" role="dialog" aria-labelledby="contact-modal-label" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="contact-modal-label">Get in touch</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <p>
                                Thank you for reaching out!!! <br>
                                Please enter you email and we will get back to you.
                            </p>
                            <label for="email">Email: </label>
                            <input type="text" id="email" name="email" placeholder="Enter your email id" required>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Sumbit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="copyright-text">
        © 2020 ROOM SEARCH PVT. LTD.
    </div>
    <div id="social-media-images">
        <a href="https://www.facebook.com" target="_blank">
            <img src="assests/images/facebook.png" class="social-media-image">
        </a>
        <a href="https://www.instagram.com" target="_blank">
            <img src="assests/images/instagram.png" class="social-media-image">
        </a>
        <a href="https://twitter.com" target="_blank">
            <img src="assests/images/twitter.png" class="social-media-image">
        </a>
    </div>
</footer>`;
    document.getElementById("header-footer").innerHTML += footerTemplate;
  }
  footer();
  function loginAndContact() {
    let template = `
     
      <!--login-->
      <div class="modal fade" tabindex="-1" role="dialog" id="login">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modal-header">Please Login</h5>
              <button type="button" id="close1" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" style=" display: flex;flex-direction: column; margin-left: 7%;  margin-right: 7%;">
              <div style="display: flex; flex-direction: row; justify-content: space-evenly;align-items: center; padding: 2%;">
                  <label style="margin-right: 25%;" for="name">Username:</label><br/>
                  <input type="text" id="name" placeholder="Enter Username" required/>
              </div>
              <div style="display: flex; flex-direction: row;justify-content: space-evenly;align-items: center; padding: 2%;">
                  <label style="margin-right: 25%;" for="example-input-password">Password:</label><br/>
                  <input type="password" id="password" placeholder="Enter Password" required autocomplete="off"/>
              </div>
             
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary btn-sm" onclick="loginM()" id="login-button" data-dismiss="modal" style="display: flex; margin: auto;">Login</button>
             
            </div>
          </div>
        </div>
      </div>
     <!--contact modal-->
     <div class="modal fade" tabindex="-1" role="dialog" id="example-modal-signup">
       <div class="modal-dialog" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="modal-header">Get in touch</h5>
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <div class="modal-body">
               <form>
                   <p>Thank you for reaching out!!!<br/>
                   Please enter you email and we will get back to you</p>
                 <p style="display: flex; float: left;">
                     <label for="email">Email:</label><br/>
                     <input type="email" id="email" placeholder="Enter your email id" required style="margin-left:5px;"/>
                 </p>
                
               </form>
           </div>
           <div class="modal-footer">
             <button type="button" class="btn btn-primary btn-sm">Submit</button>
           </div>
         </div>
       </div>
     </div>
      `;
    document.getElementById("loginAndContact").innerHTML = template;
  }
  loginAndContact(); 