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
    
      
      
    
      var element = document.getElementById("c227f3a1-71c1-4e7e-aef3-81f0d6220755");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'c227f3a1-71c1-4e7e-aef3-81f0d6220755' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;118e9aca-0a1d-4670-bf71-160d630bd16c&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86045&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;86046&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86124&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86044&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86027&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;86084&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;86083&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86139&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86140&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86126&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;rug_x&quot;:{&quot;__ndarray__&quot;:&quot;jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[43]},&quot;rug_y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[43]}},&quot;selected&quot;:{&quot;id&quot;:&quot;86130&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;86129&quot;}},&quot;id&quot;:&quot;86103&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86138&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;86095&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;86047&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;86067&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;86070&quot;},{&quot;id&quot;:&quot;86074&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;86071&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;86111&quot;},{&quot;id&quot;:&quot;86113&quot;},{&quot;id&quot;:&quot;86114&quot;},{&quot;id&quot;:&quot;86115&quot;},{&quot;id&quot;:&quot;86118&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;86120&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;86085&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;86059&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;86063&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;86061&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;86065&quot;}},&quot;id&quot;:&quot;86058&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86141&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86142&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;end&quot;:1,&quot;start&quot;:-0.05},&quot;id&quot;:&quot;86025&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86127&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86128&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;86048&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;86103&quot;}},&quot;id&quot;:&quot;86105&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;86094&quot;}},&quot;id&quot;:&quot;86098&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;86022&quot;},0,0],[{&quot;id&quot;:&quot;86058&quot;},0,1]]},&quot;id&quot;:&quot;86146&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;angle&quot;:{&quot;units&quot;:&quot;rad&quot;,&quot;value&quot;:1.5707963267948966},&quot;line_alpha&quot;:{&quot;value&quot;:0.35},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:8},&quot;x&quot;:{&quot;field&quot;:&quot;rug_x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;rug_y&quot;}},&quot;id&quot;:&quot;86102&quot;,&quot;type&quot;:&quot;Dash&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.5,&quot;line_width&quot;:1.5,&quot;location&quot;:0.2515582690238711},&quot;id&quot;:&quot;86099&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;86047&quot;}},&quot;id&quot;:&quot;86041&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.5,&quot;line_width&quot;:0.75,&quot;location&quot;:0.17824444314769777},&quot;id&quot;:&quot;86100&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;86103&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;86102&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;86105&quot;}},&quot;id&quot;:&quot;86104&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86129&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;tau&quot;},&quot;id&quot;:&quot;86106&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86023&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86130&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;86049&quot;},{&quot;id&quot;:&quot;86085&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;86039&quot;},{&quot;id&quot;:&quot;86040&quot;},{&quot;id&quot;:&quot;86041&quot;},{&quot;id&quot;:&quot;86042&quot;},{&quot;id&quot;:&quot;86043&quot;},{&quot;id&quot;:&quot;86044&quot;},{&quot;id&quot;:&quot;86045&quot;},{&quot;id&quot;:&quot;86046&quot;},{&quot;id&quot;:&quot;86075&quot;},{&quot;id&quot;:&quot;86076&quot;},{&quot;id&quot;:&quot;86077&quot;},{&quot;id&quot;:&quot;86078&quot;},{&quot;id&quot;:&quot;86079&quot;},{&quot;id&quot;:&quot;86080&quot;},{&quot;id&quot;:&quot;86081&quot;},{&quot;id&quot;:&quot;86082&quot;}]},&quot;id&quot;:&quot;86147&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.7,&quot;line_width&quot;:1.5,&quot;location&quot;:0},&quot;id&quot;:&quot;86101&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;rug_x&quot;:{&quot;__ndarray__&quot;:&quot;fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[43]},&quot;rug_y&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[43]}},&quot;selected&quot;:{&quot;id&quot;:&quot;86142&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;86141&quot;}},&quot;id&quot;:&quot;86117&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86036&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;86110&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86029&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;86148&quot;},{&quot;id&quot;:&quot;86146&quot;}]},&quot;id&quot;:&quot;86149&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;86109&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;86035&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;86038&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;86140&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;86139&quot;}},&quot;id&quot;:&quot;86108&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;86039&quot;},{&quot;id&quot;:&quot;86040&quot;},{&quot;id&quot;:&quot;86041&quot;},{&quot;id&quot;:&quot;86042&quot;},{&quot;id&quot;:&quot;86043&quot;},{&quot;id&quot;:&quot;86044&quot;},{&quot;id&quot;:&quot;86045&quot;},{&quot;id&quot;:&quot;86046&quot;}]},&quot;id&quot;:&quot;86049&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;86117&quot;}},&quot;id&quot;:&quot;86119&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;MCSE for quantiles&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;86124&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;86036&quot;}},&quot;id&quot;:&quot;86035&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;86108&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;86109&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;86110&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;86112&quot;}},&quot;id&quot;:&quot;86111&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;86108&quot;}},&quot;id&quot;:&quot;86112&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;86094&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;86095&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;86096&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;86098&quot;}},&quot;id&quot;:&quot;86097&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;angle&quot;:{&quot;units&quot;:&quot;rad&quot;,&quot;value&quot;:1.5707963267948966},&quot;line_alpha&quot;:{&quot;value&quot;:0.35},&quot;size&quot;:{&quot;units&quot;:&quot;screen&quot;,&quot;value&quot;:8},&quot;x&quot;:{&quot;field&quot;:&quot;rug_x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;rug_y&quot;}},&quot;id&quot;:&quot;86116&quot;,&quot;type&quot;:&quot;Dash&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.5,&quot;line_width&quot;:1.5,&quot;location&quot;:0.21484300137312468},&quot;id&quot;:&quot;86113&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;Quantile&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;86138&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;86068&quot;}},&quot;id&quot;:&quot;86067&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86042&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86039&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.5,&quot;line_width&quot;:0.75,&quot;location&quot;:0.15209716425007633},&quot;id&quot;:&quot;86114&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{&quot;end&quot;:1,&quot;start&quot;:-0.05},&quot;id&quot;:&quot;86061&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;86117&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;86116&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;86119&quot;}},&quot;id&quot;:&quot;86118&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;mu&quot;},&quot;id&quot;:&quot;86120&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86063&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86065&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;86128&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;86127&quot;}},&quot;id&quot;:&quot;86094&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;86048&quot;}},&quot;id&quot;:&quot;86043&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86075&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.7,&quot;line_width&quot;:1.5,&quot;location&quot;:0},&quot;id&quot;:&quot;86115&quot;,&quot;type&quot;:&quot;Span&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86068&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;86067&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;86070&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;86147&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;86148&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;MCSE for quantiles&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;86136&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;86072&quot;}},&quot;id&quot;:&quot;86071&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86072&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86040&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;86071&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;86074&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;86083&quot;}},&quot;id&quot;:&quot;86077&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;86096&quot;,&quot;type&quot;:&quot;Circle&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86076&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;86082&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;86031&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;86034&quot;},{&quot;id&quot;:&quot;86038&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;86035&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;86097&quot;},{&quot;id&quot;:&quot;86099&quot;},{&quot;id&quot;:&quot;86100&quot;},{&quot;id&quot;:&quot;86101&quot;},{&quot;id&quot;:&quot;86104&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;86106&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;86049&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;86023&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;86027&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;86025&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;86029&quot;}},&quot;id&quot;:&quot;86022&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86081&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86078&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86032&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;86084&quot;}},&quot;id&quot;:&quot;86079&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86080&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86059&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;86075&quot;},{&quot;id&quot;:&quot;86076&quot;},{&quot;id&quot;:&quot;86077&quot;},{&quot;id&quot;:&quot;86078&quot;},{&quot;id&quot;:&quot;86079&quot;},{&quot;id&quot;:&quot;86080&quot;},{&quot;id&quot;:&quot;86081&quot;},{&quot;id&quot;:&quot;86082&quot;}]},&quot;id&quot;:&quot;86085&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;86031&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;86034&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;86136&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;Quantile&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;86126&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;86032&quot;}},&quot;id&quot;:&quot;86031&quot;,&quot;type&quot;:&quot;LinearAxis&quot;}],&quot;root_ids&quot;:[&quot;86149&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"118e9aca-0a1d-4670-bf71-160d630bd16c","root_ids":["86149"],"roots":{"86149":"c227f3a1-71c1-4e7e-aef3-81f0d6220755"}}];
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