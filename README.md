<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>bio</title>
    <link href="https://fonts.googleapis.com/css?family=Droid+Serif|Source+Sans+Pro" rel="stylesheet">
	<link rel="stylesheet" href="{{ url_for('static', filename='main.css') }}">
<style>
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    
    

}

body {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 100%;
    
    
    margin: 0;
}
#dio-div{
  width: 100%;
  height:100%;
  background-color:#d1cda7;}
 

#logo-div{
    width: 100%;
    min-width: 200px;
    background-color:#bebaac ;
    padding-left: 2%;
    padding-top: 100px;
    height: 202px;
}
#nav-div{ 
    width: 100%;
    min-width: 30px;
    background-color: #AC8181;
    text-align: center;
    line-height: 30px;
}
#hed-div{
    width: 100%;
    min-width: 100px;
    padding-top: 50px;
    padding-bottom: 100px;
    background-color: #F8F8FF;
    text-align: center;
    margin-bottom: 0px;
}

.dot {
  height: 250px;
  width: 250px;
  padding-top: 5%;
  background-image:url("ASP.jpg");
  background-position:top;
  background-size: cover;
  border-radius: 50%;
  display: inline-block;
}



#main-div{
    width: 100%;    
    margin-bottom: 0px;
}
#SB-div{
    width: 25%;
    min-height: 400px;
    background-image: url("ASP.jpg");
    background-position: center;
    background-size:cover;
    float: right;
  
    text-align: center;
    line-height: 400px;
}
#BA-div{
    width: 70%;
    min-height: 500px;
    background-color:#CFCECA ;
    float: left;
    text-align: center;
    height: 500px;
}

#SBA-div{
  width: 5%;
  min-height: 500px;
  background-color:#CFCECA ;
  float: right;
  text-align: center;
  line-height: 500px;
}

.clearfix::after{
    content: "";
    display: block;
    clear: both;
    
}

#fot-div{
    width: 100%;
    min-width: 300px;
    background-color: #C9A959;
    text-align: left;
    padding-top: 20px;
    padding-left: 10px;
    height: 300px;
}

#wrapp-div{
    width: 100%;
    margin: auto;
    background-color:#CFCECA  ;

}




ul{
    margin: 0;
    padding: 0;
    display:inline-flex;
    position: absolute;
    top: 10%;
    left: 64%;
    transform: translate(-1%, -60%);
  }
  ul li{
    list-style: none;
    margin: 0 15px;
  }
  ul li a {
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    text-align: centre;
    line-height: 100px;
    background-image:url("GIT.jpg");
    background-position:center;
    background-size: cover;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: .5s;
  }

  
  ul li a::before {
    content : '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ffee10;
    transition: .5s;
    transition: scale(.9);
    z-index: -1;
  }
  
  ul li a:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ffee10;
  }
  
  ul li a:hover {
    color: #ffee10;
    box-shadow: 0 0 15px #ffee10;
    text-shadow: 0 0 15px #ffee10;
}


  ul li a b {
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    text-align: centre;
    line-height: 100px;
    background-image:url("LIT.jpg");
    background-position:center;
    background-size: cover;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: .5s;
  }


  ul li a b::before {
    content : '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ffee10;
    transition: .5s;
    transition: scale(.9);
    z-index: -1;
  }

  ul li a b:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ffee10;
  }

  ul li a b:hover {
    color: #ffee10;
    box-shadow: 0 0 15px #ffee10;
    text-shadow: 0 0 15px #ffee10;
  }


  ul li a c {
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    text-align: centre;
    line-height: 100px;
    background-image:url("INT.jpg");
    background-position:center;
    background-size: cover;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: .5s;
  }


  ul li a c::before {
    content : '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ffee10;
    transition: .5s;
    transition: scale(.9);
    z-index: -1;
  }

  ul li a c:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ffee10;
  }

  ul li a c:hover {
    color: #ffee10;
    box-shadow: 0 0 15px #ffee10;
    text-shadow: 0 0 15px #ffee10;
  }



  ul li a d {
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    text-align: centre;
    line-height: 100px;
    background-image:url("DIS.jpg");
    background-position:center;
    background-size: contain;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: .5s;
  }


  ul li a d::before {
    content : '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ffee10;
    transition: .5s;
    transition: scale(.9);
    z-index: -1;
  }

  ul li a d:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ffee10;
  }

  ul li a d:hover {
    color: #ffee10;
    box-shadow: 0 0 15px #ffee10;
    text-shadow: 0 0 15px #ffee10;
  }


  ul li a de {
    position: relative;
    display: block;
    width: 100px;
    height: 100px;
    text-align: left;
    line-height: 100px;
    background-image:url("hom.jpg");
    background-position:center;
    background-size: contain;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: .5s;
  }


  ul li a de::before {
    content : '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #ffee10;
    transition: .5s;
    transition: scale(.9);
    z-index: -1;
  }

  ul li a de:hover::before {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ffee10;
  }

  ul li a de:hover {
    color: #ffee10;
    box-shadow: 0 0 15px #ffee10;
    text-shadow: 0 0 15px #ffee10;
  }


klp {
    font-family:cursive;
    font-size: 3mm;
    margin: 3;
    padding-bottom: 1em;
  }
  
  klp {
    font-size: 2em;
  }
  
  klp::before {
  content : '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  background: #d1cda7;
  transition: .5s;
  transition: scale(.9);
  z-index: -1;
  }
  
  klp:hover::before {
  transform: scale(1.1);
  box-shadow: 0 0 15px #ffffff;
  }
  
  klp:hover {
  color: #ffffff;
  box-shadow: 0 20 15px #d1cda7;
  text-shadow: 0 0 15px #f0d904;
  }
al{
  font-style: italic;
  font-family:fantasy;
  font-size: 120px;
  color: #235D5B;
}

ahl{
  font-style: italic;
  padding-left: 10px;
  font-family:fantasy;
  font-size: 80px;
  color: #235D5B;}

h3{
  margin: 0%;
}
.parent{
  display: grid;
  grid-template-columns: repeat(1,1fr);
}


.child{
  display: grid;
  
}

@media ( max-width : 768px){
  .parent{
    grid-template-columns: repeat(1,1fr);
  }
  al{
    font-style: italic;
    font-family:fantasy;
    font-size: 70px;
    color: #235D5B;
}}
@media(max-width :480px)  {
  .parent{
    grid-template-columns: repeat(1,1fr);
  }
  al{
    font-style: italic;
    font-family:fantasy;
    font-size: 60px;
    color: #235D5B;
  
}}

</style>
</head>
<body>

    <div id="logo-div">
       
        <form action = "/test" method = "post">
          <klp>Home</klp>
        </form>


        <ul>
            <li>
              
              <a  href="https://www.linkedin.com/in/alwin-sajan-102177255">
                <b></b>
              </a>
            </li>
            <li>
              <a href="https://github.com/Alwin-Sajan">
                <i ></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_present_legend_">
                <c></c>
              </a>
            </li>
            <li>
              <a href="https://alwin-sajan.github.io/discode">
                <d></d>
              </a>
            </li>
          </ul>
          
    </div>

    <div id="wrapp-div" class="parent" >

        
        <div id="nav-div" class="child">
          <h3><marquee direction="right" 
            behavior="alternate"
            onmouseover="this.stop();"
               onmouseout="this.start();">
            Welcome to my website
        </marquee></h3>
        </div>
        <div id="hed-div" class="child">
        
        </div>

        <div id="main-div" class="clearfix">
            
            <div id="SBA-div">

            </div>
            <div id="SB-div">
                
            </div>
            <div id="BA-div">
                <h1>I'm</h1>
                <al>Alwin Sajan</al>
                <p>
                A young tech enthusiast from India.</p> 

              
                <h3>Lover of all things tech and 
                  computers!</h3>
                  <h3> I'm always excited to learn about the latest gadgets and
                   gizmos.</h3>
                <h4>- 🔭 I’m currently doing B tech in CSE</h4>

                <h4>- 🌱 I’m currently learning Flask , Python ,Java </h4>
                <h4>- ⚡ Fun fact Python nerd</h4>
                <h4>- 💬 Ask me about Python , tech etc</h4>

            </div>
        </div>

        <div id="fot-div" class="child">
          Connect with me:
          <a href="https://linkedin.com/in/alwin-sajan-102177255" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="Alwin Sajan" height="30" width="40" /></a>
          <a href="https://instagram.com/_present_legend_" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="_present_legend_" height="30" width="40" /></a>
          <a href="https://discord.gg/Alwin Sajan#8079" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="8079" height="30" width="40" /></a>
          <a href="https://github.com/Alwin-Sajan" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg" alt="Alwin-Sajan" height="30" width="40" /></a>
          </p>


        </div>
    </div>
</body>
</html>
