jQuery(document).ready(function ($) {

    var jssor_1_options = {
      $AutoPlay: 1,
      $DragOrientation: 2,
      $PlayOrientation: 2,
      $Cols: 1,
      $Align: 0,
      $BulletNavigatorOptions: {
        $Class: $JssorBulletNavigator$,
        $Orientation: 2
      }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    /*#region responsive code begin*/

    var MAX_WIDTH = 1920;

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

    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    /*#endregion responsive code end*/
});
