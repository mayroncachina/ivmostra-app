var Page5Controller = function(){};

Page5Controller.prototype = {
     initialize:function(){
         
     },
     destroy: function(){
         // unset events
         // stop ajax
         // destroy components
         IVMostra.scroll = null;
         PageLoad.ajxHandle = null;
     }
};