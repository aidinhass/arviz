(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("424d3501-0cb7-4edb-9736-52a9ca67a835");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '424d3501-0cb7-4edb-9736-52a9ca67a835' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js": "kLr4fYcqcSpbuI95brIH3vnnYCquzzSxHPU6XGQCIkQRGJwhg0StNbj1eegrHs12", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js": "xIGPmVtaOm+z0BqfSOMn4lOR6ciex448GIKG4eE61LsAvmGj48XcMQZtKcE/UXZe", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js": "Dc9u1wF/0zApGIWoBbH77iWEHtdmkuYWG839Uzmv8y8yBLXebjO9ZnERsde5Ln/P", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js": "cT9JaBz7GiRXdENrJLZNSC6eMNF3nh3fa5fTF51Svp+ukxPdwcU5kGXGPBgDCa2j"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.1.1.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.1.1.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;3671cade-9937-4c35-9416-9d2c4d39d1e4&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63325&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63333&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63338&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63391&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;ticks&quot;:[0.0,-0.75,-1.0]},&quot;id&quot;:&quot;63351&quot;,&quot;type&quot;:&quot;FixedTicker&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;63332&quot;},{&quot;id&quot;:&quot;63333&quot;},{&quot;id&quot;:&quot;63334&quot;},{&quot;id&quot;:&quot;63335&quot;},{&quot;id&quot;:&quot;63336&quot;},{&quot;id&quot;:&quot;63337&quot;},{&quot;id&quot;:&quot;63338&quot;},{&quot;id&quot;:&quot;63339&quot;}]},&quot;id&quot;:&quot;63342&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;63353&quot;}},&quot;id&quot;:&quot;63357&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;63342&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;63332&quot;},{&quot;id&quot;:&quot;63333&quot;},{&quot;id&quot;:&quot;63334&quot;},{&quot;id&quot;:&quot;63335&quot;},{&quot;id&quot;:&quot;63336&quot;},{&quot;id&quot;:&quot;63337&quot;},{&quot;id&quot;:&quot;63338&quot;},{&quot;id&quot;:&quot;63339&quot;}]},&quot;id&quot;:&quot;63398&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;63379&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63384&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63316&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;63399&quot;},{&quot;id&quot;:&quot;63397&quot;}]},&quot;id&quot;:&quot;63400&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;xs&quot;:{&quot;field&quot;:&quot;xs&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;ys&quot;}},&quot;id&quot;:&quot;63369&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:[-30.687290318389813,-30.81037417660005],&quot;y&quot;:[0.0,-1.0]},&quot;selected&quot;:{&quot;id&quot;:&quot;63389&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;63388&quot;}},&quot;id&quot;:&quot;63363&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63393&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63337&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63335&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;63363&quot;}},&quot;id&quot;:&quot;63367&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;63353&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;63354&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;63355&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;63357&quot;}},&quot;id&quot;:&quot;63356&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;63374&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;63363&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;63364&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;63365&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;63367&quot;}},&quot;id&quot;:&quot;63366&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;end&quot;:0.5,&quot;start&quot;:-1.5},&quot;id&quot;:&quot;63318&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;grey&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;xs&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;ys&quot;}},&quot;id&quot;:&quot;63360&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;63368&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;63369&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;63370&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;63372&quot;}},&quot;id&quot;:&quot;63371&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63385&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:[-32.37106695144684,-32.71848009989285],&quot;y&quot;:[0.0,-1.0]},&quot;selected&quot;:{&quot;id&quot;:&quot;63393&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;63392&quot;}},&quot;id&quot;:&quot;63373&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;63324&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;63327&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63322&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;63368&quot;}},&quot;id&quot;:&quot;63372&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63320&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;xs&quot;:[[-32.01404842503181,-29.360532211747813],[-32.079455654889365,-29.541292698310734]],&quot;ys&quot;:[[0.0,0.0],[-1.0,-1.0]]},&quot;selected&quot;:{&quot;id&quot;:&quot;63391&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;63390&quot;}},&quot;id&quot;:&quot;63368&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;grey&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;grey&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;63354&quot;,&quot;type&quot;:&quot;Triangle&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;xs&quot;:[[-30.896420573800537,-30.724327779399562]],&quot;ys&quot;:[[-0.75,-0.75]]},&quot;selected&quot;:{&quot;id&quot;:&quot;63387&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;63386&quot;}},&quot;id&quot;:&quot;63358&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63387&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:null},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;63364&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;xs&quot;:{&quot;field&quot;:&quot;xs&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;ys&quot;}},&quot;id&quot;:&quot;63370&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;Log&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;63383&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;63325&quot;}},&quot;id&quot;:&quot;63324&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;grey&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;grey&quot;},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;63355&quot;,&quot;type&quot;:&quot;Triangle&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;63315&quot;},0,0]]},&quot;id&quot;:&quot;63397&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:[-30.81037417660005],&quot;y&quot;:[-0.75]},&quot;selected&quot;:{&quot;id&quot;:&quot;63385&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;63384&quot;}},&quot;id&quot;:&quot;63353&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;63328&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;63331&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;63341&quot;}},&quot;id&quot;:&quot;63336&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;dimension&quot;:&quot;height&quot;,&quot;line_color&quot;:&quot;grey&quot;,&quot;line_dash&quot;:[6],&quot;line_width&quot;:1.7677669529663689,&quot;location&quot;:-30.687290318389813},&quot;id&quot;:&quot;63378&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63388&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;63324&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;63327&quot;},{&quot;id&quot;:&quot;63331&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;63328&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;63356&quot;},{&quot;id&quot;:&quot;63361&quot;},{&quot;id&quot;:&quot;63366&quot;},{&quot;id&quot;:&quot;63371&quot;},{&quot;id&quot;:&quot;63376&quot;},{&quot;id&quot;:&quot;63378&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;63379&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;63342&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;63316&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;63320&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;63318&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;63322&quot;}},&quot;id&quot;:&quot;63315&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;value&quot;:&quot;grey&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;xs&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;ys&quot;}},&quot;id&quot;:&quot;63359&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63332&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:null},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;63365&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63390&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;63373&quot;}},&quot;id&quot;:&quot;63377&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;63358&quot;}},&quot;id&quot;:&quot;63362&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_width&quot;:{&quot;value&quot;:2},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:6},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;63375&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63392&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63381&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;63381&quot;},&quot;major_label_overrides&quot;:{&quot;-0.75&quot;:&quot;&quot;,&quot;-1&quot;:&quot;Centered 8 schools&quot;,&quot;0&quot;:&quot;Non-centered 8 schools&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;63351&quot;}},&quot;id&quot;:&quot;63328&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63389&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;63373&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;63374&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;63375&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;63377&quot;}},&quot;id&quot;:&quot;63376&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;63340&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63383&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;63339&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;63340&quot;}},&quot;id&quot;:&quot;63334&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;63358&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;63359&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;63360&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;63362&quot;}},&quot;id&quot;:&quot;63361&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;63398&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;63399&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;63341&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;63386&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;}],&quot;root_ids&quot;:[&quot;63400&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"3671cade-9937-4c35-9416-9d2c4d39d1e4","root_ids":["63400"],"roots":{"63400":"424d3501-0cb7-4edb-9736-52a9ca67a835"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();