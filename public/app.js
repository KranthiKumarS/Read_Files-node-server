(function($) {
	
    // var pathTest;
    // var rootHtmlUrl = "./Data-Components/Component-1/html/helloworld.html";
    // var targetHtmlId =  "#code-html";
    // ajaxCall(rootHtmlUrl, targetHtmlId);


    // var rootCssUrl = "public\\Data-Components\\Component-1\\css\\bootstrap.min.css";
    // var targetCssId =  "#code-less";
    // ajaxCall(rootCssUrl, targetCssId);


    function ajaxCall(rootUrl, targetId){
        $.ajax({
            url : rootUrl,
            dataType: "text",
            success : function (data) {
                $(targetId).html(HtmlEncode(data));
            }
        });
    }
    
    
    function HtmlEncode(s)
    {
        var el = document.createElement("div");
        el.innerText = el.textContent = s;
        s = el.innerHTML;
        return s;
    }
       
       
       
    //    $.when( $.ajax( "helloworld.html" ) ).then(function( data, textStatus, jqXHR ) {
    //       //alert( jqXHR.status ); // Alerts 200
    //        //console.log(HtmlEncode(data));
    //        //$("#code-css").html(HtmlEncode(data));
    //     });

    $("body").each(function(){
        if($(this).find("pre").text() == ""){
        $("pre").html("File Not found !");
        }
    });

      // $.ajax({
      //     url : "data-folder/data.json",
      //     dataType: "json",
      //     success : function (data) {
      //      // var str = '<ul>';
      //       $.each(data.name, function(k, v) {
      //           // str += '<li>' + v.Object + '</li><ul>';
      //           // $.each(v.ButtonAttr[0],function(kk,vv){
      //           //   str += '<li>' + kk + ':' + vv + '</li>';
      //           // });    
      //           // str += '</ul>';
      //           console.log( data);
      //       });
      //       //str += '</ul>';
      //       console.log( data.path);
      //     }
      // });
    $.ajax({
          url : "com-data.json",
          dataType: "json",
          success : function (cwData) {
            //console.log(cwData);
            $.each(cwData.children, function (i, children) {
                var componentName = cwData.name +"/"+ cwData.children[i].name + "/" ;
                //console.log(componentName);
                var option_cate = '<li class="item"><a class="folder" href="#" data-path="'+ componentName +'">' + children.name + '</a></li>';
                // Add the children names
                var details = '<ul class="details">';
                $.each(children.children, function (i, item) {
                    //details += '<li class="name"><a href="#" data-path="'+ componentName + item.name +'">' + item.name + '</a></li>'; 
                    $.each(item.children, function (i, product) {
                        details += '<li class="name"><a class="file" href="#" data-fileType = "'+ item.name +'" data-filePath="'+ componentName + item.name + "/" + product.name +'">' + item.name + '</a></li>'; 
                        //console.log(product.name);
                    });  
                });
                details += '</ul>';
                $(option_cate).appendTo('#product_list').append(details);
                $(option_cate).appendTo('#contact').append(details);
            });
        }
    }); 
 
   $(document).on('click', '.folder, .file', function(){
       var dataFilePath = $(this).attr('data-filePath');
       //var dataFilePath = "Data-Components/Component-1/css/bootstrap.min.css"
       console.log(dataFilePath);
       var targetHtmlId =  "#code-"+ $(this).attr('data-fileType');
       var targetTabId =  "#"+ $(this).attr('data-fileType');
       //var targetHtmlId = "#code-html";
       ajaxCall(dataFilePath, targetHtmlId);
      
       $('#myTabContent > .tab-pane').removeClass('active in');
       $('.nav-tabs > li').removeClass('active');
       $('.nav-tabs > '+ targetTabId+ 'tab').addClass('active');
        $('#myTabContent > '+ targetTabId).addClass('active in');
   });

/**
 * Spitter
 */


    $(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false
    });

    $(".panel-top").resizable({
    handleSelector: ".splitter-horizontal",
    resizeWidth: false
    });

/**
 * Animated Menu
 */

    $('.dropdown').tendina({
        // This is a setup made only
        // to show which options you can use,
        // it doesn't actually make sense!
        animate: true,
        speed: 500,
        onHover: false,
        hoverDelay: 300,
        activeMenu: null,
        openCallback: function(clickedEl) {
          //console.log('Hey dude!');
        },
        closeCallback: function(clickedEl) {
          //console.log('Bye dude!');
        }
      });


})(this.jQuery);
