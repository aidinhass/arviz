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
    
      
      
    
      var element = document.getElementById("4f37a3ef-0230-4411-bf35-d31f48338c35");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '4f37a3ef-0230-4411-bf35-d31f48338c35' but no matching script tag was found.")
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
                    
                  var docs_json = '{&quot;cc154b02-ffef-4862-aa93-445c36257606&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67298&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67304&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;67298&quot;},{&quot;id&quot;:&quot;67299&quot;},{&quot;id&quot;:&quot;67300&quot;},{&quot;id&quot;:&quot;67301&quot;},{&quot;id&quot;:&quot;67302&quot;},{&quot;id&quot;:&quot;67303&quot;},{&quot;id&quot;:&quot;67304&quot;},{&quot;id&quot;:&quot;67305&quot;}]},&quot;id&quot;:&quot;67308&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67306&quot;}},&quot;id&quot;:&quot;67300&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.1,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67319&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67290&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;67293&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67291&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;#ff0000&quot;,&quot;line_alpha&quot;:0,&quot;line_color&quot;:&quot;#ff0000&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67318&quot;,&quot;type&quot;:&quot;Patch&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67330&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67301&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67307&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67303&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67288&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;67307&quot;}},&quot;id&quot;:&quot;67302&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67336&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67282&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67284&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[400]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67334&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67333&quot;}},&quot;id&quot;:&quot;67317&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67317&quot;}},&quot;id&quot;:&quot;67321&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;67290&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;67293&quot;},{&quot;id&quot;:&quot;67297&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;67294&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;67320&quot;},{&quot;id&quot;:&quot;67325&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;67327&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;67308&quot;},&quot;toolbar_location&quot;:&quot;above&quot;,&quot;x_range&quot;:{&quot;id&quot;:&quot;67282&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;67286&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;67284&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;67288&quot;}},&quot;id&quot;:&quot;67281&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67332&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67335&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;67327&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;NBO8206GAMBuHoAk5Tn8v7J2o6+Fofi/7L1RGOPq9L+UBaFLerPzv9G/imLfNvO/I3v6m1lp7b8PpuDy/U7tvyZk8PQ8Auy/5g1edH4p6r88t1F2fQnqv971st2EV+m/RE+3VB5M6L+dJc2Na1nnv6e5Dlx46uW/c3t92IOl5b/lOSMXexTkvyfgqQRmwOO/uonbloeS47/cgmU1lCvjvyksvHKq8+K/7ja1vDR24r8kN+JnSPXhvytjKyGe0+C/YCTPlTaU4L+5W+qPNhjgv4r9HCKeQN+/06GsP09k2r/Mjx+Pui/Zv/FuO2/8wte/myw4Kx8817+Sc0TLAdnVv+SMtcgqL9W/O9VXFN3b1L+f4BeLNkHSv5D2NmSdHtK/AXjUZOwW0b/mMG6CDI3Ov4b6axkon8O/H+yFN8Vuwr/k32THGMXAv92VCj3uv7i/0FDmHUIttb8F7Nt6zqmrv/KY63TkwJC/WsOHlUx+ib95C6G0NqB2P7NFgPfZaYM/+yX8R4Ampz+XXI0XQ1WqPwE9puqaSqw/z7xKlyA4tD97MiNmSZK5P2DQBZelpL0/WG+2pr2VxD+BTl2RAarFP3xcV6ziRsY/mhlWJ3Zzxz+zFrhVgePMPwujdYkXsNA/PknRBuL30z/HBVSdyo/UP7h+p8uxnNY/yWm4yFQZ2T/2piApDfTZPyQxBm+Nn9o/78+cDzos3D+nMaD9gp7fP0QuUuNnw98/lsvIxrs74D/tLKxoTQnjP60u6mK7GuM/sOMwhlHS4z8Pj2H+0n7kP0xyYVd7j+Q/3OhrKKgY5T/fmJQm/+nmPzSuXoyZaec/EsxJkcvv5z/pRFZICAXqP0x3QdeDqus/cb1fHEBb7D8P8Cfc0dvtP5SQ+Tm/AvA/uDufLanK8j9oWOzK6OfyP6642+PVUvM/2AopTf8D9D8/1MKDa8X1Pw+s66qA1PU/6NmqiMN69z+mTNKbbrL3PwQHiDNFtPc/+6S0TMYj+D/dYd69TpD7PxaOHwPGiPw/2NF6OX4m/T8xayn0+DH+Pxr8/Lb4r/4/luYkB0KqAEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;mNmHSGLz7j/J8L9tDePxP6dELig9r/M/CiHXc46K9T82fS/aQib2Pxiguk6QZPY/N2EBmaml+D981keDQKz4P/bmw8Jw//g/hnzoYqB1+T8xkmuioH35P4hCk8geqvk/LyzSavjs+T+ZtowcpSn6P5ZR/Ohhhfo/I6HgCZ+W+j+HMTc64fr6P/aH1X7mD/s/kh1JGl4b+z9Jn6byGjX7P/b0UGMVQ/s/RLLS0HJi+z83cgfmrYL7PzUntXcYy/s/6DaMWvLa+z8SaQVc8vn7P09gvDvsF/w/xmsKGHaz/D8GDhyuCNr8PyKSGHKgB/0/bfqYGnwY/T+OcZfG30T9P2RO6aYaWv0/WQV1XYRk/T/sA50u2bf9Py4heVMsvP0/AHFlcyLd/T/yHNk3Lxf+P1hAaX4Nxv4/PqGHrBPZ/j8CsolzrvP+P1GrF44AOv8/es0Q75VW/z9QkBTGWJH/P84oFjd+3v8/PXhqs4Hm/z9DKK0NqAUAQCPA++y0CQBATPiPAE0uAEC5Gi+GqjQAQHpM1TWVOABA8ypdguBQAEDKjJglSWYAQEIXXJaSdgBAe7M17a2kAEB06ooMUK0AQOS6YhU3sgBAzbA6sZu7AEC2wK0KHOcAQDFal3gBCwFAlBRtIH4/AUBcQNWp/EgBQOx3uhzLaQFAnYaLTJWRAUBvCpLSQJ8BQBJj8Nb4qQFA/8z5oMPCAUAaA9ov6PkBQOQiNX42/AFAcxnZeHcHAkCehRWtKWECQNZFXWxXYwJAdhzGMEp6AkDiMcxf2o8CQEou7GrvkQJAHH0NBRWjAkAck9LkP90CQMbVizEz7QJAgjkpcvn9AkCdyAoJoUADQOou6HpQdQNArveLA2iLA0AC/oQ7ersDQCVkfs6vAARA7s5nS6qyBEAaFrsy+rkEQCzu9ni11ARAtkJK0/8ABUAQtfDgWnEFQATruiogdQVAerYq4rDeBUAqk/Smm+wFQMEB4kwR7QVAPyktk/EIBkB3mHevE+QGQIbjx4AxIgdAdrRejp9JB0DMWgo9fowHQAY/vy3+qwdAS3OSAyFVCEA=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;order&quot;:&quot;little&quot;,&quot;shape&quot;:[100]}},&quot;selected&quot;:{&quot;id&quot;:&quot;67336&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;67335&quot;}},&quot;id&quot;:&quot;67322&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67322&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67323&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67324&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67326&quot;}},&quot;id&quot;:&quot;67325&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67323&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67295&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67330&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67295&quot;}},&quot;id&quot;:&quot;67294&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;67322&quot;}},&quot;id&quot;:&quot;67326&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;67294&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;67297&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_width&quot;:3,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;67324&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67286&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;67306&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67333&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;67317&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;67318&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;67319&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;67321&quot;}},&quot;id&quot;:&quot;67320&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67334&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;67305&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;67332&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;67291&quot;}},&quot;id&quot;:&quot;67290&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;67299&quot;,&quot;type&quot;:&quot;PanTool&quot;}],&quot;root_ids&quot;:[&quot;67281&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.1.1&quot;}}';
                  var render_items = [{"docid":"cc154b02-ffef-4862-aa93-445c36257606","root_ids":["67281"],"roots":{"67281":"4f37a3ef-0230-4411-bf35-d31f48338c35"}}];
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