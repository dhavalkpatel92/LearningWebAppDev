function check_no_and_add(val, classname, divide_by_three, divide_by_five) {

    if (val % 5 == 0 && val % 3 == 0) {
        $("." + classname).append("<p>" + divide_by_three + "" + divide_by_five + "</p>");
    } else if (val % 3 == 0) {
        $("." + classname).append("<p>" + divide_by_three + "</p>");
    } else if (val % 5 == 0) {
        $("." + classname).append("<p>" + divide_by_five + "</p>");
    } else {
        $("." + classname).append("<p>" + val + "</p>");
    }
}

function fizzbuzz_1() {
    $(".first").html("");
    for (var i = 1; i <= 100; i++) {
        check_no_and_add(i, "first", "Fizz", "Buzz");
    }
}

function fizzbuzz_2(first, last) {
    firstNo = Number(first);
    lastNo = Number(last);
    if (firstNo < lastNo) {
        $(".second").html("");
        for (var i = firstNo; i <= lastNo; i++) {
            check_no_and_add(i, "second", "Fizz", "Buzz");
        }
    } else if (firstNo > lastNo) {
        $(".second").append("Enter Numbers Properly");
    } else {
        $(".second").append("Enter Valid Parameters");
    }
}

function fizzbuzz_3(arr) {
    $(".third").html("");
    //console.log(arr);
    $.each(arr, function(i, val) {

        array_no = Number(val);
        check_no_and_add(array_no, "third", "Fizz", "Buzz");
    });
}

function fizzbuzz_4(obj) {
    $(".fourth").html("");
    console.log(obj);
    for (var i = 1; i <= 100; i++) {
        check_no_and_add(i, "fourth", obj.divisibleByThree, obj.divisibleByFive);
    }

}

function fizzbuzz_5(arr, obj) {
    $(".fifth").html("");
    jQuery.each(arr, function(i, val) {
        array_no = Number(val);
        check_no_and_add(array_no, "fifth", obj.divisibleByThree, obj.divisibleByFive);
    });

}
$(document).ready(function() {
    fizzbuzz_1();
    fizzbuzz_2(100,200);
    fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
    fizzbuzz_4({ divisibleByThree: "foo", divisibleByFive: "bar"});
    fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115],{ divisibleByThree: "foo", divisibleByFive: "bar"});

    $("#fn2_submit").click(function(){
      var start_no=$("#fno").val();
      var end_no=$("#lno").val();
      fizzbuzz_2(start_no, end_no);
    });
    $("#fn3_submit").click(function(){
      arr=$("#array").val();
      var array = JSON.parse(arr);
      fizzbuzz_3(array);
    });
    $("#fn4_submit").click(function(){
      obj=$("#object").val();
      var object = $.parseJSON(obj);
      fizzbuzz_4(object);
    });

    $("#fn5_submit").click(function(){

      arr=$("#array_5").val();
      var array = JSON.parse(arr);

      obj=$("#object_5").val();
      var object = $.parseJSON(obj);
      fizzbuzz_5(array,object);
    });
});
