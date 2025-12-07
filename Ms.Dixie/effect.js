$(window).load(function(){
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});


$('document').ready(function(){
    var vw;
    $(window).resize(function(){
        vw = $(window).width()/2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,').stop();
        $('#b11').animate({top:240, left: vw-350},500);
        $('#b22').animate({top:240, left: vw-250},500);
        $('#b33').animate({top:240, left: vw-150},500);
        $('#b44').animate({top:240, left: vw-50},500);
        $('#b55').animate({top:240, left: vw+50},500);
        $('#b66').animate({top:240, left: vw+150},500);
    });

    $(document).ready(function() {
        // Initialize the bulbsOn object
        let bulbsOn = {
            yellow: false,
            red: false,
            blue: false,
            green: false,
            pink: false,
            orange: false
        };

        // Function to turn on a specific bulb
        function turnOnBulb(color) {
            // Update the state to true
            bulbsOn[color] = true;
            
            // Add the glow class to the bulb element (updated to match your CSS: -after)
            $(`#bulb_${color}`).addClass(`bulb-glow-${color}-after`);

            $(`#turn_${color}`).fadeOut('fast');  // <--- This line hides the button

            // Play click sound
            const audio = document.getElementById('bulbSound');
            audio.currentTime = 0; // rewind to start
            audio.play();

            
            // After turning on, check if all bulbs are on
            checkAllBulbs();
        }

        // Function to check if all bulbs are on and trigger the final sequence
        function checkAllBulbs() {
            if (Object.values(bulbsOn).every(val => val)) {
                // All bulbs are on: Perform the full animation sequence
                $('#bulb_yellow').addClass('bulb-glow-yellow-after');  // Updated class name
                $('#bulb_red').addClass('bulb-glow-red-after');
                $('#bulb_blue').addClass('bulb-glow-blue-after');
                $('#bulb_green').addClass('bulb-glow-green-after');
                $('#bulb_pink').addClass('bulb-glow-pink-after');
                $('#bulb_orange').addClass('bulb-glow-orange-after');
                $('body').addClass('peach');  // Assumes 'peach' class lights up the screen in your CSS
                $('.abony').animate({top:'-1vh'}, 8000);
                $('.aboly').animate({top:'-1vh'}, 8000);

                
                $('#turn_on').fadeOut('slow').delay(5000).promise().done(function(){
                    $('#cake_fadein').fadeIn('slow'); // eto babaguhin ha
                });
            }
        }

        // Attach click events to the turn-on buttons
        $('#turn_yellow').click(() => turnOnBulb('yellow'));
        $('#turn_red').click(() => turnOnBulb('red'));
        $('#turn_blue').click(() => turnOnBulb('blue'));
        $('#turn_green').click(() => turnOnBulb('green'));
        $('#turn_pink').click(() => turnOnBulb('pink'));
        $('#turn_orange').click(() => turnOnBulb('orange'));

        // Separate handler for the master turn-on button (classes updated here too)
        $('#turn_on').click(function(){
            $('#bulb_yellow').addClass('bulb-glow-yellow-after');
            $('#bulb_red').addClass('bulb-glow-red-after');
            $('#bulb_blue').addClass('bulb-glow-blue-after');
            $('#bulb_green').addClass('bulb-glow-green-after');
            $('#bulb_pink').addClass('bulb-glow-pink-after');
            $('#bulb_orange').addClass('bulb-glow-orange-after');
            $('body').addClass('peach');
            $('.abony').animate({top:'-1vh'},8000);
            $('.aboly').animate({top:'-1vh'},8000);
            $(this).fadeOut('slow').delay(5000).promise().done(function(){
                $('#cake_fadein').fadeIn('slow');
            });
        });
    });

    $('#cake_fadein').click(function(){
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function(){
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function(){
            // NEW: After lighting candles, make the cake clickable
            $('.cake').css('cursor', 'pointer');  // Change cursor to indicate clickability
            $('.cake').click(function(){
                // "Blow out" the candles
                $('.fuego').fadeOut('slow');
                // Play a sound (reuse the bulb sound for effect)
                           var audio = $('.song')[0];
       						 audio.play();
                // Proceed to the next step: show wish message
                $('#bannar_coming').fadeIn('slow');
                // Remove clickability to prevent multiple clicks
                $('.cake').off('click').css('cursor', 'default');
            });
        });
    });


    $('#bannar_coming').click(function(){
        $('.bannar').addClass('bannar-come');
        $('.banal').addClass('banal-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function(){
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopOne() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b1').animate({left:randleft,bottom:randtop},10000,function(){
            loopOne();
        });
    }
    function loopTwo() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b2').animate({left:randleft,bottom:randtop},10000,function(){
            loopTwo();
        });
    }
    function loopThree() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b3').animate({left:randleft,bottom:randtop},10000,function(){
            loopThree();
        });
    }
    function loopFour() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b4').animate({left:randleft,bottom:randtop},10000,function(){
            loopFour();
        });
    }
    function loopFive() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b5').animate({left:randleft,bottom:randtop},10000,function(){
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1000*Math.random();
        var randtop = 500*Math.random();
        $('#b6').animate({left:randleft,bottom:randtop},10000,function(){
            loopSix();
        });
    }

    // ashly//
    function loopAsh1() {
        var randright = 1000*Math.random();
        var randtop = 300*Math.random();
        $('#e1').animate({right:randright,bottom:randtop},10000,function(){
            loopAsh1();
        });
    }
    function loopAsh2() {
        var randright = 1000*Math.random();
        var randtop = 300*Math.random();
        $('#e2').animate({right:randright,bottom:randtop},10000,function(){
            loopAsh2();
        });
    }
    function loopAsh3() {
        var randright = 1000*Math.random();
        var randtop = 300*Math.random();
        $('#e3').animate({right:randright,bottom:randtop},10000,function(){
            loopAsh3();
        });
    }
    function loopAsh4() {
        var randright = 1000*Math.random();
        var randtop = 300*Math.random();
        $('#e4').animate({right:randright,bottom:randtop},10000,function(){
            loopAsh4();
        });
    }
    function loopAsh5() {
        var randright = 1000*Math.random();
        var randtop = 300*Math.random();
        $('#e5').animate({right:randright,bottom:randtop},10000,function(){
            loopAsh5();
        });
    }

	//ash meow meow

    function loopW1() {
    var randleft = 1000*Math.random();
    var randtop = 300*Math.random();
    $('#w1').animate({left:randleft,bottom:randtop},10000,function(){
        loopW1();
     });
    }
    function loopW2() {
        var randleft = 1000*Math.random();
        var randtop = 300*Math.random();
        $('#w2').animate({left:randleft,bottom:randtop},10000,function(){
            loopW2();
        });
    }
    function loopW3() {
        var randleft = 1000*Math.random();
        var randtop = 300*Math.random();
        $('#w3').animate({left:randleft,bottom:randtop},10000,function(){
            loopW3();
        });
    }
    function loopW4() {
        var randleft = 1000*Math.random();
        var randtop = 300*Math.random();
        $('#w4').animate({left:randleft,bottom:randtop},10000,function(){
            loopW4();
        });
    }
    function loopW5() {
        var randleft = 1000*Math.random();
        var randtop = 300*Math.random();
        $('#w5').animate({left:randleft,bottom:randtop},10000,function(){
            loopW5();
        });
    }

    window.loopW1 = loopW1;
    window.loopW2 = loopW2;
    window.loopW3 = loopW3;
    window.loopW4 = loopW4;
    window.loopW5 = loopW5;
    window.loopAsh1 = loopAsh1;
    window.loopAsh2 = loopAsh2;
    window.loopAsh3 = loopAsh3;
    window.loopAsh4 = loopAsh4;
    window.loopAsh5 = loopAsh5;
    $('#balloons_flying').click(function(){
        $('.balloon-border').animate({top:-500},8000);
        $('.abony').animate({top:-1000},8000);
        $('.aboly').animate({top:-1000},8000);
        $('#b1,#b4,#b5,#e1,#e3,#e5,#w1,#w3').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6,#e2,#e4,#w2,#w4,#w5').addClass('balloons-rotate-behaviour-two');
        // $('#b3').addClass('balloons-rotate-behaviour-two');
        // $('#b4').addClass('balloons-rotate-behaviour-one');
        // $('#b5').addClass('balloons-rotate-behaviour-one');
        // $('#b6').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopAsh1();
        loopAsh2();
        loopAsh3();
        loopAsh4();
        loopAsh5();
        
        $(this).fadeOut('slow').delay(5000).promise().done(function(){
            $('#wish_message').fadeIn('slow');
        });
    });
    
    // this is some shit

// Select all draggable images (now includes .Ash)
const images = document.querySelectorAll('.meow, .Ash');

images.forEach(img => {
  let dragging = false;
  let startX, startY;
  let imgX = 0, imgY = 0;

  // Prevent default drag behavior (stops dragging to other sites/apps)
  img.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });

  // pointerdown (mouse/touch) - also plays sound on click/tap
  img.addEventListener("pointerdown", (e) => {
    // Stop the ongoing loop animation for THIS specific element
    $(`#${img.id}`).stop();


    
    // Play the specific sound for this element
    let sound;
if (img.classList.contains('meow')) {
  // For .meow: Play matching audio (e.g., w1 -> meow1)
  sound = document.getElementById(`meow${img.id.slice(1)}`);
} else if (img.classList.contains('Ash')) {
  // For .Ash: Play matching audio (e.g., ash1 -> g1)
  sound = document.getElementById(`g${img.id.slice(1)}`);
}
if (sound) {
  sound.currentTime = 0;
  sound.play().catch(err => console.error('Audio play failed:', err));
}


    dragging = true;
    img.setPointerCapture(e.pointerId);

    startX = e.clientX;
    startY = e.clientY;

    const rect = img.getBoundingClientRect();
    imgX = rect.left;
    imgY = rect.top;
  });

  // pointermove
  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // Calculate new position
    let newLeft = imgX + dx;
    let newTop = imgY + dy;

    // Optional: Constrain to viewport (prevents dragging outside the visible page)
    const imgWidth = img.offsetWidth;
    const imgHeight = img.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    newLeft = Math.max(0, Math.min(newLeft, viewportWidth - imgWidth));
    newTop = Math.max(0, Math.min(newTop, viewportHeight - imgHeight));

    // Set styles based on element type to match animation properties
    if (img.classList.contains('Ash')) {
      // For Ash: Set 'right' and 'top' to match {right: ..., bottom: ...} animation
      const newRight = viewportWidth - (newLeft + imgWidth);  // Calculate right from left
      img.style.right = newRight + "px";
      img.style.top = newTop + "px";
      img.style.left = "auto";  // Clear left to avoid conflicts
    } else {
      // For W: Set 'left' and 'top' as before
      img.style.left = newLeft + "px";
      img.style.top = newTop + "px";
    }
  });

  // pointerup - resume the loop after dragging ends
  window.addEventListener("pointerup", (e) => {
    if (dragging) {  // Only resume if we were actually dragging
      // Dynamically call the loop function based on the element's ID and class
      let loopName;
      if (img.id.startsWith('w')) {
        // For .meow elements (e.g., w1 -> loopW1)
        loopName = `loopW${img.id.slice(1)}`;
      } else if (img.id.startsWith('e')) {
        // For .Ash elements (e.g., e1 -> loopAsh1)
        loopName = `loopAsh${img.id.slice(1)}`;
      }
      if (loopName && typeof window[loopName] === 'function') {
        window[loopName]();  // Call the function (e.g., loopAsh1())
      }
    }
    dragging = false;
    try { img.releasePointerCapture(e.pointerId); } catch {}
  });
});

// distance
    $('#wish_message').click(function(){
        vw = $(window).width()/2;

        $('#b1,#b2,#b3,#b4,#b5,#b6').stop();
        $('#b1').attr('id','b11');
        $('#b2').attr('id','b22');
        $('#b3').attr('id','b33');
        $('#b4').attr('id','b44');
        $('#b5').attr('id','b55');
        $('#b6').attr('id','b66');

        $('#b11').animate({ top: 240, left: vw - 300 }, 500);
        $('#b22').animate({ top: 240, left: vw - 200 }, 500);
        $('#b33').animate({ top: 240, left: vw - 100 }, 500);
        $('#b44').animate({ top: 240, left: vw       }, 500);
        $('#b55').animate({ top: 240, left: vw + 100 }, 500);
        $('#b66').animate({ top: 240, left: vw + 200 }, 500);

        loopW1();
        loopW2();
        loopW3();
        loopW4();
        loopW5();
        $('.balloons').css('opacity','0.9');
        $('.balloons h2').fadeIn(3000);

        
        $(this).fadeOut('slow').delay(3000).promise().done(function(){
            $('#story').fadeIn('slow');
        });
    });
    
    $('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });

        
        
        var i;

        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
                i=i+1;
                $("p:nth-child("+i+")").fadeIn('slow').delay(1000);
                if(i==50){
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                        $('.cake').fadeIn('fast');

                        
                    });
                    
                }
                else{
                    msgLoop(i);
                }            

            });
            // body...
        }
        
        msgLoop(0);
        
    });
    
});

//alert('hello');