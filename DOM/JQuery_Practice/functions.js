$(document).ready(function(){

    // Tesitng if Jquery was properly loaded combining with JS
    let btn = document.getElementById('btn_1');
        btn.addEventListener('click', jqueryloaded);
    function jqueryloaded(e){
        alert('JQuery is already loaded');
        e.preventDefault();
    }
    // Scroll to the top pof the page 
    $('#btn_2').on('click', function(e){
        $(window).scrollTop(0);
        e.preventDefault();
    });

    // show lorem ipsum

    $('.text-btn').on('click',function(){
        $('.lorem').toggle(function(){
            $('p').css('display', 'block');
        }, 
        function(){
            //$('p').css('display', 'none');
        })
        
    });

    // Smooth scroll to the top

    $('#btn_3').on('click',function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop: 0},"slow");
    });

    // Right click disabled

    $(document).bind('contextmenu', function(){
        return false;
    });

    //Disable the submit button until the visitor has clicked a check box.
    $('#submit-btn').on('click',function(e){
        if ($('#checkbox').prop('checked')){
            alert('Form succesfully validate, thank you');
            e.preventDefault();
        }else {
            alert('Please, check de the box');
            e.preventDefault();
        };
    })

    // Hide a boken img tag
    $('img').on('error', function(){
        $(this).hide();
    })

    // blink text
    //$('.blink-text').blink(); blink method is deprecated in this Jquery Version
   $('.blink-btn').on('click',function(){
        $('.blink-text').animate({opacity:0},1000, "linear", function(){
            $(this).animate({opacity:1},1000);
        })
    })
    
    // Striped Tables


    $('.even-btn').click(function(){
        let oddBtn = true;
        if (oddBtn) {
            $('section .container-table .table tr:nth-child(2n+3)').addClass('striped');
            $('section .container-table .table tr:nth-child(even)').removeClass('striped');
        }

    });

    $('.odd-btn').click(function(){
        let evenBtn = true;
        if (evenBtn){
            $('section .container-table .table tr:nth-child(2n+3)').removeClass('striped');
            $('section .container-table .table tr:nth-child(even)').addClass('striped');

        }
    })

    /*$('.even-btn').click(function(){
        let evenTrue = true;
        if (evenTrue) {
                $('section .container-table .table tr:nth-child(even)').addClass('striped');
            }
    })*/

    // Print document html to PDF with JQuery
    $('#print').on('click',function () {
        window.print();
        return false;
    });

    // Limit imput character in textarea tag
    $('textarea').attr({maxLength:300});

    $('textarea').keyup(function(){
        let MaxChars =    300;
        let writenChars = $('textarea').val().length;
        let leftChars = parseInt(MaxChars - writenChars);
        $('#leftChars').text(leftChars + ' ' + 'Character(s) left');
        if (leftChars == 0) {
            $('.leftChars').text('Maximum' + ' ' + MaxChars + ' ' + 'characters exceeded');
        }
    })
    
});