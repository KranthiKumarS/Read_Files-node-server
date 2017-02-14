(function($) {
	
    var rootHtmlUrl = "helloworld.html";
            var targetHtmlId =  "#code-html";
            ajaxCall(rootHtmlUrl, targetHtmlId);


            var rootCssUrl = "base.less";
            var targetCssId =  "#code-less";
            ajaxCall(rootCssUrl, targetCssId);


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
       
       
       
       $.when( $.ajax( "helloworld.html" ) ).then(function( data, textStatus, jqXHR ) {
          //alert( jqXHR.status ); // Alerts 200
           //console.log(HtmlEncode(data));
           //$("#code-css").html(HtmlEncode(data));
        });

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
      //$.getJSON('data-folder/data.json', function (cwData) {
console.log(cwData);
          // $.each(cwData.product, function (i, product) {
          //     var option_cate = '<li class="item"><a href="#">' + product.category + '</a></li>';
          //     // Add the product names
          //     var details = '<ul class="details">';
          //     $.each(product.items, function (i, item) {
          //         details += '<li class="name"><a href="#">' + item.name + '</a></li>'; 
          //     });
      
          //   details += '</ul>';
            
          //   $(option_cate).appendTo('#product_list').append(details);
          // });


          $.each(cwData.children, function (i, children) {
              var option_cate = '<li class="item"><a href="#">' + children.name + '</a></li>';
              // Add the children names
              var details = '<ul class="details">';
              $.each(children.children, function (i, item) {
                  details += '<li class="name"><a href="#">' + item.name + '</a></li>'; 
              });
      
            details += '</ul>';
            
            $(option_cate).appendTo('#product_list').append(details);
            $(option_cate).appendTo('#contact').append(details);
          });




          }
      }); //$.getJSON
 
    //$(".container-fluid").split({orientation:'vertical', limit:600, position:'70%'});

    /**
     * Kendo Spliter
     */
        // function resizeTabs() {
        //     var paneHeight = $("#tabstrip").closest(".k-pane").innerHeight();
        //     var tabsHeight = $("#tabstrip > .k-tabstrip-items").outerHeight();
        //     $("#tabstrip > div").height(paneHeight - tabsHeight - 18);
        // }

        // $("#vertical").kendoSplitter({
        //     orientation: "vertical",
        //     panes: [
        //         { collapsible: true, size: "60px" },
        //         { collapsible: false },
        //         { collapsible: false, resizable: false, size: "10%" }
        //     ]
        // });

        // $("#horizontal").kendoSplitter({
        //     panes: [
        //         { collapsible: true, size: "100px" },
        //         { collapsible: false },
        //         { collapsible: true, size: "20%" }
        //     ],
        //     resize: resizeTabs
        // });

        // $("#tabstrip").kendoTabStrip();

        // resizeTabs();

    /**
     * Kendo Spliter End
     */


    $(".panel-left").resizable({
    handleSelector: ".splitter",
    resizeHeight: false
    });

    $(".panel-top").resizable({
    handleSelector: ".splitter-horizontal",
    resizeWidth: false
    });



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
          console.log('Hey dude!');
        },
        closeCallback: function(clickedEl) {
          console.log('Bye dude!');
        }
      });


})(this.jQuery);
