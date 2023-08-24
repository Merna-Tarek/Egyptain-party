$(".openmenu").click(function () {
    $(".leftmenu").animate({ width: "200px" }, 1000);

    $(".home-content").animate({ marginLeft: "200px" }, 1000);
});

$(".closebtn").click(function () {
    $(".leftmenu").animate({ width: "0" }, 1000);

    $(".home-content").animate({ marginLeft: "0px" }, 1000);
});

$("#duration .toggle").click(function(){
    $(this).next().slideToggle();

    $("#duration div").not($(this).next()).slideUp();

})

window.onload = function () {
    countDownToTime("2 February 2024 12:00:00");
    };
    function countDownToTime(datetocount) {
    let futureDate = new Date(datetocount).getTime();

    let currentDate = new Date().getTime();

    let timeDifference = (futureDate - currentDate) / 1000;

    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - days * 24 * 60 * 60) / 3600);
    let mins = Math.floor(
      (timeDifference - days * 24 * 60 * 60 - hours * 3600) / 60
    );
    let seconds = Math.floor(
      timeDifference - days * 24 * 60 * 60 - hours * 3600 - mins * 60
    );

    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${mins} m`);
    $(".seconds").html(`${seconds} s`);

    setInterval(function () {
    countDownToTime(datetocount), 1000;
    });
}



$("textarea").keyup(function () {
  let maxLength = 100;
  let length = $(this).val().length;
  let AmountLeft = maxLength - length;
  
  if (AmountLeft <= 0) {
    $(".lenfowords").text("your available character finished");
  } else {
    $(".lenfowords").text(AmountLeft);
  }
});

