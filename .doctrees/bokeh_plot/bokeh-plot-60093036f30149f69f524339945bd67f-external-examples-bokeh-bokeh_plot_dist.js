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
    
      
      
    
      var element = document.getElementById("a82038fa-36cc-45ed-b317-0cfc2e19239f");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'a82038fa-36cc-45ed-b317-0cfc2e19239f' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;b06d5ae7-0e41-4878-8947-2d4c74263e87&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65664&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#000000&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0},&quot;line_color&quot;:{&quot;value&quot;:&quot;#000000&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65641&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65601&quot;}},&quot;id&quot;:&quot;65597&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65579&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65648&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65600&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65632&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;65643&quot;}]},&quot;id&quot;:&quot;65655&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65587&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65590&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65677&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65678&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65585&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65588&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65651&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;65645&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65652&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65614&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65673&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65619&quot;}},&quot;id&quot;:&quot;65618&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65650&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65588&quot;}},&quot;id&quot;:&quot;65587&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65612&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65595&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65599&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65595&quot;},{&quot;id&quot;:&quot;65596&quot;},{&quot;id&quot;:&quot;65597&quot;},{&quot;id&quot;:&quot;65598&quot;},{&quot;id&quot;:&quot;65599&quot;},{&quot;id&quot;:&quot;65600&quot;}]},&quot;id&quot;:&quot;65602&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65583&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65648&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65592&quot;}},&quot;id&quot;:&quot;65591&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65581&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65616&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65592&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65671&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65626&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65591&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65594&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65619&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65618&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;65621&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;65671&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;65623&quot;}},&quot;id&quot;:&quot;65622&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65623&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;65622&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;65625&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65618&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65621&quot;},{&quot;id&quot;:&quot;65625&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65622&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65659&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65664&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65633&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65610&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65614&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65612&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65616&quot;}},&quot;id&quot;:&quot;65609&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;65587&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;65590&quot;},{&quot;id&quot;:&quot;65594&quot;},{&quot;id&quot;:&quot;65654&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;65591&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;65643&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;65645&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;65602&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;65579&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;65583&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;65581&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;65585&quot;}},&quot;id&quot;:&quot;65578&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#000000&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#000000&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;65642&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65596&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65610&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;65626&quot;},{&quot;id&quot;:&quot;65627&quot;},{&quot;id&quot;:&quot;65628&quot;},{&quot;id&quot;:&quot;65629&quot;},{&quot;id&quot;:&quot;65630&quot;},{&quot;id&quot;:&quot;65631&quot;}]},&quot;id&quot;:&quot;65633&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65627&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65598&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65657&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65631&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;65632&quot;}},&quot;id&quot;:&quot;65628&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;65655&quot;}]},&quot;id&quot;:&quot;65654&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65629&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65673&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[512]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[512]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65678&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65677&quot;}},&quot;id&quot;:&quot;65656&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65630&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;65601&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65656&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65657&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65658&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65660&quot;}},&quot;id&quot;:&quot;65659&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;exSuR+F6lD/D9Shcj8K1P1CNl24Sg8A/6SYxCKwcyj+q8dJNYhDIPwaBlUOLbMc/sp3vp8ZLtz/ZzvdT46WrP7gehetRuJ4/exSuR+F6hD97FK5H4Xp0PwAAAAAAAAAA/Knx0k1iUD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[13]}},&quot;selected&quot;:{&quot;id&quot;:&quot;65652&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;65651&quot;}},&quot;id&quot;:&quot;65640&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;65578&quot;},{&quot;id&quot;:&quot;65609&quot;}]},&quot;id&quot;:&quot;65661&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65640&quot;}},&quot;id&quot;:&quot;65644&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;65640&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;65641&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;65642&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;65644&quot;}},&quot;id&quot;:&quot;65643&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;65658&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;65650&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;65656&quot;}},&quot;id&quot;:&quot;65660&quot;,&quot;type&quot;:&quot;CDSView&quot;}],&quot;root_ids&quot;:[&quot;65661&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"b06d5ae7-0e41-4878-8947-2d4c74263e87","root_ids":["65661"],"roots":{"65661":"a82038fa-36cc-45ed-b317-0cfc2e19239f"}}];
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