window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const navbrand = document.querySelector(".navbar-brand");
  const navlink1 = document.querySelector(".navbar-link1");
  const navlink2 = document.querySelector(".navbar-link2");
  const navlink3 = document.querySelector(".navbar-link3");
  const navlink4 = document.querySelector(".navbar-link4");
  const navlink5 = document.querySelector(".navbar-link5");
  

  if (window.scrollY > 100) {
      navbar.style.backgroundColor = "#fff";
      navbar.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.3)';
      navbrand.style.color = "#000";
      navlink1.style.color = "#000";
      navlink2.style.color = "#000";
      navlink3.style.color = "#000";
      navlink4.style.color = "#000";
      navlink5.style.color = "#000";
      

      navlink1.addEventListener('mouseenter', () => {
      navlink1.style.color = '#ca3c14';
    });
    
     navlink1.addEventListener('mouseleave', () => {
        navlink1.style.color = '#000';
    });


      navlink2.addEventListener('mouseenter', () => {
      navlink2.style.color = '#ca3c14';
    });
    
     navlink2.addEventListener('mouseleave', () => {
        navlink2.style.color = '#000';
    });

      navlink3.addEventListener('mouseenter', () => {
      navlink3.style.color = '#ca3c14';
    });
    
     navlink3.addEventListener('mouseleave', () => {
        navlink3.style.color = '#000';
    });

      navlink4.addEventListener('mouseenter', () => {
      navlink4.style.color = '#ca3c14';
    });
    
     navlink4.addEventListener('mouseleave', () => {
        navlink4.style.color = '#000';
    });

      navlink5.addEventListener('mouseenter', () => {
      navlink5.style.color = '#ca3c14';
    });
    
     navlink5.addEventListener('mouseleave', () => {
        navlink5.style.color = '#000';
    });

      navbrand.addEventListener('mouseenter', () => {
      navbrand.style.color = '#ca3c14';
    });
    
     navbrand.addEventListener('mouseleave', () => {
        navbrand.style.color = '#000';
    });
    
  }else {
      navbar.style.backgroundColor = "transparent"; 
      navbar.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0)';
      navbrand.style.color = "#FFFFFFCC" ;
      navlink1.style.color = "#FFFFFFCC";
      navlink2.style.color = "#FFFFFFCC";
      navlink3.style.color = "#FFFFFFCC";
      navlink4.style.color = "#FFFFFFCC";
      navlink5.style.color = "#FFFFFFCC";

      navlink1.addEventListener('mouseenter', () => {
        navlink1.style.color = '#fff';
      });
      
       navlink1.addEventListener('mouseleave', () => {
          navlink1.style.color = '#FFFFFFCC';
      });
      navlink2.addEventListener('mouseenter', () => {
        navlink2.style.color = '#fff';
      });
      
       navlink2.addEventListener('mouseleave', () => {
          navlink2.style.color = '#FFFFFFCC';
      });
      navlink3.addEventListener('mouseenter', () => {
        navlink3.style.color = '#fff';
      });
      
       navlink3.addEventListener('mouseleave', () => {
          navlink3.style.color = '#FFFFFFCC';
      });
      navlink4.addEventListener('mouseenter', () => {
        navlink4.style.color = '#fff';
      });
      
       navlink4.addEventListener('mouseleave', () => {
          navlink4.style.color = '#FFFFFFCC';
      });
      navlink5.addEventListener('mouseenter', () => {
        navlink5.style.color = '#fff';
      });
      
       navlink5.addEventListener('mouseleave', () => {
          navlink5.style.color = '#FFFFFFCC';
      });
      navbrand.addEventListener('mouseenter', () => {
        navbrand.style.color = '#fff';
      });
      
       navbrand.addEventListener('mouseleave', () => {
          navbrand.style.color = '#FFFFFFCC';
      });
  }

});

 

