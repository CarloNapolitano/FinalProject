$(document).ready(function(){
      var animate=function(){
         $('#banner').slideDown('slow');
        };
        $('#banner').slideUp(animate);
        
          var loadpage=function(){
          $('#loading').delay(2000).hide('fast');
          };
          $('#loading').show(loadpage);
          
          var hide_tabs_initial_load=function(){
            $('#tabs').delay(2100).show('fast');
          };
            $('#tabs').hide(hide_tabs_initial_load);

        
        $('#welcome').click(function(){
           function hide(){
          $('#tabs').delay(2000).show(750);
          $('#loading').delay(1700).hide('fast');
        }
        $('#tabs').hide(hide);
        $('#loading').show();
        });
        
         $('#latestnews').click(function(){
           function hide(){
          $('#tabs').delay(2000).show(750);
          $('#loading').delay(1700).hide('fast');
        }
        $('#tabs').hide(hide);
        $('#loading').show();
        });
        
         $('#summary').click(function(){
           function hide(){
          $('#tabs').delay(2000).show(750);
           $('#loading').delay(1700).hide('fast');
        }
        $('#tabs').hide(hide);
        $('#loading').show();
        });
       
        $('.showsubscribeform').click(function(){
          $(".subscribediv").hide();
          $("#EmailForm").show();
         });
        $("#submit").click(function(){
          $("#EmailForm").hide();
          $(".subscribediv").show();
          $('#loading').show();
         });
          
          
      });