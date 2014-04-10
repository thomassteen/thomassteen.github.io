(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
         $(".uib_w_4").click(function(evt)
        {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
        });
        
        
        $("#btn_settings").click(function(evt)
        {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
            xively.setKey("wgTSYj1e9fsmgkfbMmVNETghi2u7m7B7NYACQAcusBgLpBCl");
            xively.datastream.get( "1196460529", "brewtemp", function(data){update_brew_temp(data)});
            xively.datastream.get( "1196460529", "steamtemp", function(data){update_steam_temp(data)});
            //xively.datastream.get( "1196460529", "currenttemp", function(data){update_current_temp(data)}); 
        
            
         uib_sb.toggle_sidebar($(".uib_w_2"));  
        });
        $("#btn_sidebar_ok").click(function(evt)
        {
         /* Other possible functions are: 
           uib_sb.open_sidebar($sb)
           uib_sb.close_sidebar($sb)
           uib_sb.toggle_sidebar($sb)
            uib_sb.close_all_sidebars()
          See js/sidebar.js for the full sidebar API */
        
         uib_sb.toggle_sidebar($(".uib_w_2"));  
        });
        $("#btn_upload_to_silvia").click(function(evt)
        {
            xively_upload_temp(); 
        });
   
}
 $(document).ready(register_event_handlers);
})();