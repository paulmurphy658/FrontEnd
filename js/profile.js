/**
 * Created by Hro on 08.12.2015.
 */
/**
 * Created by Hro on 08.12.2015.
 */
$(document).ready(function(){


    $(function () {
        $('#datetimepicker4').datetimepicker();
    });
    $(function () {
        $('#datetimepicker5').datetimepicker();
    });
    /*INPUT TYPE RANGE */
    $(function() {
        $( "#slider-range-max" ).slider({
            range: "max",
            min: 001,
            max: 30,
            value: 001,
            slide: function( event, ui ) {
                $( "#amount" ).val( ui.value );
            }
        });
        $( "#slider-range-max-1" ).slider({
            range: "max",
            min: 001,
            max: 30,
            value: 001,
            slide: function( event, ui ) {
                $( "#amount-1" ).val( ui.value );
            }
        });
        $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
        $( "#amount-1" ).val( $( "#slider-range-max-1" ).slider( "value" ) );
    });

    /*INPUT TYPE RANGE END */



})