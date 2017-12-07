<!-- #region Jssor Slider Begin -->
    <!-- Generator: Jssor Slider Maker -->
    <!-- Source: https://www.jssor.com -->
    <script src="js/jssor.slider.min.js" type="text/javascript"></script>
    <script type="text/javascript">
        jssor_1_slider_init = function() {

            var jssor_1_options = {
              $AutoPlay: 0,
              $Loop: 0,
              $Cols: 1,
              $Align: 0,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Cols: 3,
                $SpacingX: 0,
                $SpacingY: 14,
                $Orientation: 2,
                $Align: 202,
                $Loop: 0
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*#region responsive code begin*/

            var MAX_WIDTH = 1569;

            function ScaleSlider() {
                var containerElement = jssor_1_slider.$Elmt.parentNode;
                var containerWidth = containerElement.clientWidth;

                if (containerWidth) {

                    var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                    jssor_1_slider.$ScaleWidth(expectedWidth);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            ScaleSlider();

            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", ScaleSlider);
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            /*#endregion responsive code end*/
        };
        function prevThumbnails() {
            alert("ouqndojnwqodiq");
        }
    </script>
    <style>
        /* jssor slider loading skin double-tail-spin css */

        .jssorl-004-double-tail-spin img {
            animation-name: jssorl-004-double-tail-spin;
            animation-duration: 1.2s;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
        }

        @keyframes jssorl-004-double-tail-spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }


        .jssora053 {display:block;position:absolute;cursor:pointer;}
        .jssora053 .a {fill:none;stroke:#fff;stroke-width:640;stroke-miterlimit:10;}
        .jssora053:hover {opacity:.8;}
        .jssora053.jssora053dn {opacity:.5;}
        .jssora053.jssora053ds {opacity:.3;pointer-events:none;}

        /*.jssort062 > > div {overflow: visible !important;}*/
        .jssort062 .p {position:absolute;top:0;left:14px !important;border:4px solid transparent;box-sizing:border-box;width:328px !important;}
        .jssort062 .t img {position:absolute;top:0;left:0;width:100%;height:100%;border:none;opacity:1;}
        .jssort062 .t .ti {position:absolute;top:0;right:0;border:none;background-color:rgba(26,28,33,0.5);padding:5px 7px;opacity:1;font-size:12px;color:white;}
        .jssort062 .t .d {position:absolute;bottom:0;left:0;right:0;border:none;background-color:rgba(26,28,33,0.5);padding:5px 7px;opacity:1;font-size:12px;color:white;}
        .jssort062 .p:hover {cursor:pointer;}
        .jssort062 .pav, .jssort062 .p:hover.pdn{border-color:#fff;}
        .jssort062 .pav .t, .jssort062 .p:hover.pdn .t{opacity:1;}
        .jssort062 .pav:before {
            content: "";
            border-right: 16px solid white;
            border-top: 16px solid transparent;
            border-bottom: 16px solid transparent;
            position: absolute;
            left: -18px;
            top: 78px;
        }
    </style>
    <div id="jssor_1" style="position:relative;margin:0 auto;top:0px;left:0px;width:1569px;height:671px;overflow:hidden;visibility:hidden;">
        <!-- Loading Screen -->
        <div data-u="loading" class="jssorl-004-double-tail-spin" style="position:absolute;top:0px;left:0px;text-align:center;background-color:rgba(0,0,0,0.7);">
            <img style="margin-top:-19px;position:relative;top:50%;width:38px;height:38px;" src="img/double-tail-spin.svg" />
        </div>
        <div style="position:relative;top:0px;left:0px;width:1145px;height:28px;overflow:hidden;font-size:16px;color:#ccc;">
            先行预告片
        </div>
        <!-- Slides -->
        <div data-u="slides" style="cursor:default;position:relative;top:28px;left:0px;width:1145px;height:643px;overflow:hidden;">
            <div>
                <img data-u="image" src="images/img/001.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/001.jpg" />
                    <span class="ti">01:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/002.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/002.jpg" />
                    <span class="ti">02:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/003.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/003.jpg" />
                    <span class="ti">03:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/004.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/004.jpg" />
                    <span class="ti">04:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/005.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/005.jpg" />
                    <span class="ti">05:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/006.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/006.jpg" />
                    <span class="ti">06:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/007.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/007.jpg" />
                    <span class="ti">07:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/008.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/008.jpg" />
                    <span class="ti">08:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/009.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/009.jpg" />
                    <span class="ti">09:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/010.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/010.jpg" />
                    <span class="ti">10:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/011.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/011.jpg" />
                    <span class="ti">11:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/012.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/012.jpg" />
                    <span class="ti">12:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
            <div>
                <img data-u="image" src="images/img/013.jpg" />
                <div data-u="thumb">
                    <img data-u="thumb" src="images/img/013.jpg" />
                    <span class="ti">13:34</span><br />
                    <span class="d">终极预告片</span>
                </div>
            </div>
        </div>
        <!-- Thumbnail Navigator -->
        <div data-u="thumbnavigator" class="jssort062" style="position:absolute;right:0px;top:28px;width:344px;height:593px;">
            <div data-u="slides">
                <div data-u="prototype" class="p" style="width:344px;height:188px;">
                    <div data-u="thumbnailtemplate" class="t"></div>
                </div>
            </div>
        </div>
        <!-- Thumbnail Navigator Arrow -->
        <div style="position:absolute;bottom:0;right:130px;width:70px;color:white;display:flex;justify-content:space-between;">
            <a onclick="prevThumbnails()" style="cursor:pointer;"><img src="images/films-thumbnail-left.png" style="width:16px;height:24px;"></a>
            <a onclick="prevThumbnails()" style="cursor:pointer;"><img src="images/films-thumbnail-right.png" style="width:16px;height:24px;"></a>
        </div>

        <!-- Arrow Navigator -->
        <div data-u="arrowleft" class="jssora053" style="width:100px;height:375px;top:0px;left:-1px;background-color:rgba(0,0,0,0.51);" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:20%;width:60%;height:100%;">
                <polyline class="a" points="11040,1920 4960,8000 11040,14080 "></polyline>
            </svg>
        </div>
        <div data-u="arrowright" class="jssora053" style="width:100px;height:375px;top:0px;right:424px;background-color:rgba(0,0,0,0.51);" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
            <svg viewbox="0 0 16000 16000" style="position:absolute;top:0;left:20%;width:60%;height:100%;">
                <polyline class="a" points="4960,1920 11040,8000 4960,14080 "></polyline>
            </svg>
        </div>

    </div>
    <script type="text/javascript">jssor_1_slider_init();</script>
    <!-- #endregion Jssor Slider End -->