
    $("header").hover(function(){
      $("header .buttons a, header h2, header nav ul li a").css("color", "black");
    },
    function(){
        $("header .buttons a, header h2, header nav ul li a").css("color","white");
        }
    );

    $("header").hover(function(){

        $("header h2").animate({
            fontSize:"38px"
        },0100);
    },
    function(){
        $("header h2").animate({
            fontSize:"32px"
        },0100);
    }
    );


    $("#usd-btn").click(function(){

        $(".display-none").toggle();
    });

    // nav toggle
    $(".nav-open").click(function(){

        $("header nav").fadeIn(0500);
        $(".nav-open").css('transform','rotate(90deg)');
        $(".nav-open").animate({
            opacity:'0'
        },-1000);
    });
    $(".nav-close").click(function(){

        $("header nav").hide();
        $(".nav-open").css('transform','rotate(-1deg)');
        $(".nav-open").animate({
            opacity:'1'
        },-1000);
    });

    // form validation

    function validation() {

        var myemail = document.getElementById('email').value;

        if (myemail == "") {
            document.getElementById('email').value= 'Required';
            return false;
        }
        else {
            alert('Congratulations your email is registered');
        }
    }