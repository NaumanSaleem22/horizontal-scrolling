// $(document).ready(function () {
//     $('video').prop('muted', true).play()
// });
const scrollContainer = document.querySelector("main");
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    screen_width = screen.width;
    desktop_animation = false;
    if (screen_width > 1024) {
        desktop_animation = true;
    }
    scrollContainer.scrollLeft += evt.deltaY;
    // custom
    const scroller = scrollContainer.scrollLeft += evt.deltaY;
    // console.log(scroller)



    // For Our Story 

    var ourStoryContent = document.querySelectorAll("#our-story-section .developing-skills-inner-content-div")
    if (screen_width >= 130 && desktop_animation == true) {
        $(document).ready(function () {
            $(ourStoryContent).addClass("flytextDown-animation");
        })
    }
    var ourStoryContentheading = document.querySelectorAll("#our-story-section .developing-skills-title.our-story-title")
    if (screen_width >= 130 && desktop_animation == true) {
        $(document).ready(function () {
            $(ourStoryContentheading).addClass("flyheadingDown-animation");
        })
    }

    // For Why STEM 
    var whyStemContent = document.querySelectorAll("#why-stem-section .developing-skills-inner-content-div");
    if (scroller >= (screen_width * 1) + 140) {
        $(document).ready(function () {
            $(whyStemContent).addClass("flytextDown-animation");
        })
    }
    var whyStemContentheading = document.querySelectorAll("#why-stem-section .developing-skills-title.our-story-title")
    if (scroller >= (screen_width * 1) + 140) {
        $(document).ready(function () {
            $(whyStemContentheading).addClass("flyheadingDown-animation");
        })
    }

    // For Computer Science Doesn't have to be difficult
    var computerDifficultContent = document.querySelectorAll("#computer-science-difficult-section .developing-skills-inner-content-div");
    if (scroller >= (screen_width * 2) + 140) {
        $(document).ready(function () {
            $(computerDifficultContent).addClass("flytextDown-animation");
        })
    }
    var computerDifficultContentheading = document.querySelectorAll("#computer-science-difficult-section .developing-skills-title.our-story-title")
    if (scroller >= (screen_width * 2) + 140) {
        $(document).ready(function () {
            $(computerDifficultContentheading).addClass("flyheadingDown-animation");
        })
    }


    // For Free Tuition Pupil 
    var freeTuitionPupil = document.querySelectorAll("#free-tuition-pupil-section .developing-skills-inner-content-div");
    if (scroller >= (screen_width * 3) + 140) {
        $(document).ready(function () {
            $(freeTuitionPupil).addClass("flytextDown-animation");
        })
    }
    var freeTuitionPupilheading = document.querySelectorAll("#free-tuition-pupil-section .developing-skills-title.our-story-title");
    if (scroller >= (screen_width * 3) + 140) {
        $(document).ready(function () {
            $(freeTuitionPupilheading).addClass("flyheadingDown-animation");
        })
    }

    //For Online Tuition Range

    var onlineTuitionRangeText = document.querySelectorAll("#online-tuition-section p");
    if (scroller >= (screen_width * 4) + 140) {
        $(document).ready(function () {
            $(onlineTuitionRangeText).addClass("flytextDown-animation");
        })
    }
    // var onlineTuitionRangebtN = document.querySelectorAll("button");
    // if (scroller >= (screen_width * 4) + 140) {
    //     $(document).ready(function () {
    //         $(onlineTuitionRangebtN).addClass("fadeIn-animation");
    //     })
    // }
    var onlineTuitionRangeinnercards = document.querySelectorAll(".group-tuition-outer-div");
    if (scroller >= (screen_width * 4) + 140) {
        $(document).ready(function () {
            $(onlineTuitionRangeinnercards).addClass("fadeIn-animation");
        })
    }
    var onlineTuitionRangeinnercardsholiday = document.querySelectorAll(".holiday-classes-outer-div");
    if (scroller >= (screen_width * 4) + 140) {
        $(document).ready(function () {
            $(onlineTuitionRangeinnercardsholiday).addClass("fadeIn-animation");
        })
    }
    var onlineTuitionRangeCards = document.querySelectorAll("#online-tuition-section .secure-cards-card");
    if (scroller >= (screen_width * 4) + 140) {
        $(document).ready(function () {
            $(onlineTuitionRangeCards).addClass("fadeLeft-animation");
        })
    }
    var onlineTuitionRangeImgCards = document.querySelectorAll("#online-tuition-section .img-card");
    if (scroller >= (screen_width * 4) + 140) {
        $(document).ready(function () {
            $(onlineTuitionRangeImgCards).addClass("fadeLeft-animation");
        })
    }


    // For About Programme
    var aboutProgrammeCards = document.querySelector("#about-programme-section .about-features-div")
    if (scroller >= (screen_width * 5) + 140) {
        $(document).ready(function () {
            $(aboutProgrammeCards).addClass("scaleUp-animation");
        })
    }
    var aboutProgrammeImage = document.querySelector("#about-programme-section .about-programme-img")
    if (scroller >= (screen_width * 5) + 140) {
        $(document).ready(function () {
            $(aboutProgrammeImage).addClass("fadeDown-animation");
        })
    }
    var aboutProgrammetext = document.querySelector("#about-programme-section .about-programme-text")
    if (scroller >= (screen_width * 5) + 140) {
        $(document).ready(function () {
            $(aboutProgrammetext).addClass("flytextDown-animation");
        })
    }
    var aboutProgrammeheading = document.querySelector("#about-programme-section .about-programme-title")
    if (scroller >= (screen_width * 5) + 140) {
        $(document).ready(function () {
            $(aboutProgrammeheading).addClass("flyheadingDown-animation");
        })
    }


    // //For How Master Classes works content
    var howItWorksContent = document.querySelectorAll("#master-classes-section ul");
    if (scroller >= (screen_width * 6) + 140) {
        $(document).ready(function () {
            $(howItWorksContent).addClass("flytextDown-animation");
        })

    }
    var howItWorksContent = document.querySelectorAll("#master-classes-section .how-it-works-title");
    if (scroller >= (screen_width * 6) + 140) {
        $(document).ready(function () {
            $(howItWorksContent).addClass("flyheadingDown-animation");
        })

    }
    var howItWorksImg = document.querySelector("#master-classes-section .how-it-works-img");
    if (scroller >= (screen_width * 6) + 140) {
        $(document).ready(function () {
            $(howItWorksImg).addClass("fadeDown-animation");
        })
    }


    // // For Master Class Schedule
    var masterClassScheduleCardDiv = document.querySelector("#master-class-schedule .course-schedule-cards-div");
    if (scroller >= (screen_width * 7) + 140) {
        $(document).ready(function () {
            $(masterClassScheduleCardDiv).addClass("fadeIn-animation");
        })
    }


    // For Course Features Content Card

    var courseFeatureContentCard = document.querySelector("#course-features-section #course-features-card");
    if (scroller >= (screen_width * 8) + 140) {
        $(document).ready(function () {
            $(courseFeatureContentCard).addClass("scaleUp-animation");
        })
    }
    var courseFeatureImg = document.querySelector("#course-features-section .course-features-img");
    if (scroller >= (screen_width * 8) + 140) {
        $(document).ready(function () {
            $(courseFeatureImg).addClass("fadeDown-animation");
        })
    }


    // For Join Our Community

    var joinCommunityContentCard = document.querySelector("#course-highlights-section #course-highlights-cards");
    if (scroller >= (screen_width * 9) + 140) {
        $(document).ready(function () {
            $(joinCommunityContentCard).addClass("scaleUp-animation");
        })
    }
    var joinCommunityImg = document.querySelector("#course-highlights-section .course-highlights-img");
    if (scroller >= (screen_width * 9) + 140) {
        $(document).ready(function () {
            $(joinCommunityImg).addClass("fadeDown-animation");
        })
    }

    // For Onliine Tutoring
    var onlineTutoringText = document.querySelectorAll("#online-tutoring-section p");
    if (scroller >= (screen_width * 10) + 140) {
        $(document).ready(function () {
            $(onlineTutoringText).addClass("fadeIn-animation");
        })
    }
    var onlineTutoringCards = document.querySelectorAll("#online-tutoring-section .testimonial-card-students-outer-div.card-outer-div");
    if (scroller >= (screen_width * 10) + 140) {
        $(document).ready(function () {
            $(onlineTutoringCards).addClass("scaleUp-animation");
        })
    }



    // For Tutoring With No Hassle 

    var tutoringHassleContentCard = document.querySelector("#tutoring-hassle-section #course-features-card");
    if (scroller >= (screen_width * 11) + 140) {
        $(document).ready(function () {
            $(tutoringHassleContentCard).addClass("scaleUp-animation");
        })
    }
    var tutoringHassleImg = document.querySelector("#tutoring-hassle-section .course-features-img");
    if (scroller >= (screen_width * 11) + 140) {
        $(document).ready(function () {
            $(tutoringHassleImg).addClass("fadeDown-animation");
        })
    }


    // // For FAQS
    var FAQContentDiv = document.querySelectorAll("#faqs-section .question-answer-div");
    if (scroller >= (screen_width * 12) + 140) {
        $(document).ready(function () {
            $(FAQContentDiv).addClass("flytextDown-animation");
        })
    }
    var FAQContentDivheading = document.querySelectorAll("#faqs-section .faqs-title");
    if (scroller >= (screen_width * 12) + 140) {
        $(document).ready(function () {
            $(FAQContentDivheading).addClass("flyheadingDown-animation");
        })
    }
    var FAQImg = document.querySelector("#faqs-section .FAQQ-img");
    if (scroller >= (screen_width * 12) + 140) {
        $(document).ready(function () {
            $(FAQImg).addClass("fadeDown-animation");
        })
    }


    // // For Happy Teacher Testimonials
    var happyTeacherTestimonials = document.querySelector("#happy-teachers-section #senior-leader-testi");
    if (scroller >= (screen_width * 13) + 140) {
        $(document).ready(function () {
            $(happyTeacherTestimonials).addClass("fadeIn-animation");
        })
    }


    // For Happy Students Testimonialls
    var studentsTestimonialsAni = document.querySelector("#happy-students-section .students-testi-slick");
    if (scroller >= (screen_width * 14) + 140) {
        $(document).ready(function () {
            $(studentsTestimonialsAni).addClass("fadeIn-animation");
        })
    }

    var studentsTestimonialsText = document.querySelectorAll("#happy-students-section p");
    if (scroller >= (screen_width * 14) + 140) {
        $(document).ready(function () {
            $(studentsTestimonialsText).addClass("fadeIn-animation");
        })
    }

    // For Our Students Part 1
    var studentsdiv = document.querySelector("#our-students-part-section .schools-slick-new");
    if (scroller >= (screen_width * 15) + 140) {
        $(document).ready(function () {
            $(studentsdiv).addClass("fadeIn-animation");
        })
    }

    // // For Our Students Part 2
    // var studentsdiv2 = document.querySelector("#our-students-part-section2 .students-card-divs");
    // if (scroller >= (screen_width * 16) + 140) {
    //     $(document).ready(function () {
    //         $(studentsdiv2).addClass("fadeIn-animation");
    //     })
    // }

    // // For Our Students Part 3
    // var studentsdiv3 = document.querySelector("#our-students-part-section3 .students-card-divs");
    // if (scroller >= (screen_width * 17) + 140) {
    //     $(document).ready(function () {
    //         $(studentsdiv3).addClass("fadeIn-animation");
    //     })
    // }

    // For Meet Your Tutor
    var meetTutortext = document.querySelectorAll("#meet-your-tutor-section p");
    if (scroller >= (screen_width * 16) + 140) {
        $(document).ready(function () {
            $(meetTutortext).addClass("fadeIn-animation");
        })
    }

    var meetTutorImg = document.querySelectorAll("#meet-your-tutor-section .meet-tutor-img");
    if (scroller >= (screen_width * 16) + 140) {
        $(document).ready(function () {
            $(meetTutorImg).addClass("fadeLeft-animation");
        })
    }

    // Get In Touch
    var getInTouch = document.querySelector("#get-in-touch-section .getintouch-content");
    var getInTouchForm = document.querySelector(".get-in-touch-form-div");
    if (scroller >= (screen_width * 17) + 140) {
        $(document).ready(function () {
            $(getInTouch).addClass("fadeIn-animation");
            $(getInTouchForm).addClass("fadeIn-animation");
        })

    }
});

var contactDesktopForm = document.getElementById("form-contact-us");
document.getElementById("submit-contact-form").addEventListener("click", function () {
    contactDesktopForm.submit();
    alert("form successfully submitted")
});


// Multistep Form Desktop
var formMultistepDesktop = document.getElementById("regForm");
document.getElementById("return-homepage").addEventListener("click", function () {
    $('#regForm').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: 'getstartedmail.php',
            type: 'POST',
            data: $(this).serialize()
        }).then(
            // resolve/success callback 
            function (response) {
                var jsonData = JSON.parse(response);
                // user is logged in successfully in the back-end 
                // let's redirect 
                if (jsonData.success == "1") {
                    alert('Email sent');
                    formMultistepDesktop.reset();
                    window.location.reload();
                }
                else {
                    alert('Invalid Credentials!');
                }
            },
            // reject/failure callback 
            function () {
                alert('There was some error!');
            }
        );
        return false;

    });

});


// Multistep form Mobile

var formMobileMultistep = document.getElementById("regForm2");
document.getElementById("return-homepage-2").addEventListener("click", function () {
    // formMobileMultistep.submit();
    // window.location.reload();
    $('#regForm2').submit(function (e) {
        e.preventDefault();

        $.ajax({
            url: 'getstartedmail.php',
            type: 'POST',
            data: $(this).serialize()
        }).then(
            // resolve/success callback 
            function (response) {
                var jsonData = JSON.parse(response);
                // user is logged in successfully in the back-end 
                // let's redirect 
                if (jsonData.success == "1") {
                    alert('Email sent');
                    formMultistepDesktop.reset();
                    window.location.reload();
                }
                else {
                    alert('Invalid Credentials!');
                }
            },
            // reject/failure callback 
            function () {
                alert('There was some error!');
            }
        );
        return false;

    });
});



// Modals
$(document).ready(function () {


    // One on one tuition
    $(".modal-one-on-one-div").hide();
    $("#one-on-one-tuition").click(function () {
        $(".modal-one-on-one-div").fadeIn();
    })
    $("#close-one-on-one-tuitions").click(function () {
        $(".modal-one-on-one-div").fadeOut();
        // $('section').css('position', '')
    })

    // Free tuition
    $(".modal-free-tuition-div").hide();
    $("#free-tuition-btn").click(function () {
        $(".modal-free-tuition-div").fadeIn();
    })
    $("#close-free-tuitions").click(function () {
        $(".modal-free-tuition-div").fadeOut();
        // $('section').css('position', '')
    })

    // MOdal group tuition
    $(".modal-group-tuition-div").hide();
    $("#group-tuition-btn").click(function () {
        $(".modal-group-tuition-div").fadeIn();
        // $('section').css('position', 'absolute')
        // $(".desktop-website").css("display", "none")
        // $(".modal-group-tuition-div").css("display", "none") 

    })
    $("#close-group-tuitions").click(function () {
        $(".modal-group-tuition-div").fadeOut();
        // $('section').css('position', '')
    })

    // modal-2 group holidays
    $(".modal-holiday-classes-div").hide();
    $("#holiday-classes-btn").click(function () {
        $(".modal-holiday-classes-div").fadeIn();
        // $('section').css('position', 'absolute')
        // $(".desktop-website").css("display", "none")
        // $(".modal-group-tuition-div").css("display", "none") 

    })

    $("#close-holiday-classes").click(function () {
        $(".modal-holiday-classes-div").fadeOut();
        // $('section').css('position', '');

    })
    // Desktop Modal Ends


    // Mobile Modal One on One Tuition
    $("#mbl-one-on-one-ttn-modal").hide();
    $("#one-on-one-modal-btn-mbl").click(function () {
        $("#mbl-one-on-one-ttn-modal").fadeIn();
        $("body").css("overflow", 'hidden');
        $("html").css("overflow", 'hidden');
    })


    $("#close-one-on-one-ttn-modal-mbl").click(function () {
        $("#mbl-one-on-one-ttn-modal").fadeOut();
        $("body").css("overflow", '');
        $("html").css("overflow", '');

    })



    // Mobile Modal Group Tuition
    $("#mbl-grp-ttn-modal").hide();
    $("#group-tuition-modal-btn-mbl").click(function () {
        $("#mbl-grp-ttn-modal").fadeIn();
        $("body").css("overflow", 'hidden');
        $("html").css("overflow", 'hidden');
    })


    $("#close-group-ttn-modal-mbl").click(function () {
        $("#mbl-grp-ttn-modal").fadeOut();
        $("body").css("overflow", '');
        $("html").css("overflow", '');

    })

    // Mobile Modal Holiday Tuitions
    $("#mbl-holiday-ttn-modal").hide();
    $("#holiday-tuition-modal-btn-mbl").click(function () {
        $("#mbl-holiday-ttn-modal").fadeIn();
        $("body").css("overflow", 'hidden');
        $("html").css("overflow", 'hidden');
    })


    $("#close-holidy-ttn-modal-mbl").click(function () {
        $("#mbl-holiday-ttn-modal").fadeOut();
        $("body").css("overflow", '');
        $("html").css("overflow", '');

    })



    // MultiStep Form Desktop
    $("#get-started-btn").click(function () {
        $("#regForm").fadeIn();
    })
    $("#close-get-started-form").click(function () {
        $("#regForm").fadeOut();
    })
    $("#return-homepage").click(function () {
        $("#regForm").fadeOut();

    })

    // MultiStep Form mobile
    $("#getStarted-mbl").click(function () {
        $("#regForm2").fadeIn();
        $("body").css("overflow", 'hidden');
        $("html").css("overflow", 'hidden');
    })
    $("#close-get-started-form2").click(function () {
        $("#regForm2").fadeOut();
        $("body").css("overflow", '');
        $("html").css("overflow", '');
    })
    $("#return-homepage2").click(function () {
        $("#regForm2").fadeOut();
        location.reload(true);
    })


    $(".btn-menu-opened").click(function () {
        // $("#close-btn").fadeIn(300);  

        $("#close-btn").removeClass("slide-right");
        $("#close-btn").addClass("slide-left");
        $(".menu-links-main-ul li").addClass("slide-up")
        $(".menu-links-main-ul li").removeClass("slide-down")

    });

    // Open mobile menu
    $(".btn-menu-opened").click(function () {
        // $("#close-btn2").fadeIn(300);
        $(".menu-links-main-ul").fadeIn();
        $("#close-btn2").addClass("slide-left");
        $("#close-btn2").removeClass("slide-right");
        $(".menu-links-main-ul li").addClass("slide-up")
        $(".menu-links-main-ul li").removeClass("slide-down")
        $("body").css("overflow", 'hidden');
        $("html").css("overflow", 'hidden');

    });
    $(".btn-menu-closed").click(function () {
        // $("#close-btn").fadeOut(); 
        $(".menu-links-main-ul").fadeOut();
        $("#close-btn").removeClass("slide-left");
        $("#close-btn").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up")
        $(".menu-links-main-ul li").addClass("slide-down")
        $('.custom-div').css('display', 'none');
        $('.custom-div2').css('display', 'none');
        $('.custom-div3').css('display', 'none');
        $('.custom-div4').css('display', 'none');
        $('.custom-div5').css('display', 'none');
        $('.custom-div').css('opacity', '0');
        $('.custom-div2').css('opacity', '0');
        $('.custom-div3').css('opacity', '0');
        $('.custom-div4').css('opacity', '0');
        $('.custom-div5').css('opacity', '0');

    })
    // Close Mobile menu
    $(".btn-menu-closed").click(function () {
        // $("#close-btn2").fadeOut();
        $("#close-btn2").removeClass("slide-left");
        $("#close-btn2").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up")
        $(".menu-links-main-ul li").addClass("slide-down")
        $("body").css("overflow", '');
        $("html").css("overflow", '');
    });

    $("#mobile-menu-logo-opened").click(function () {
        $("#close-btn2").fadeOut();
        $("body").css("overflow", '');
        $("html").css("overflow", '');
    });

    $("#menu-logo-inside").click(function () {
        // $("#close-btn").fadeOut();
        $('.custom-div').css('display', 'none');
        $('.custom-div2').css('display', 'none');
        $('.custom-div3').css('display', 'none');
        $('.custom-div4').css('display', 'none');
        $('.custom-div5').css('display', 'none');
        $('.custom-div').css('opacity', '0');
        $('.custom-div2').css('opacity', '0');
        $('.custom-div3').css('opacity', '0');
        $('.custom-div4').css('opacity', '0');
        $('.custom-div5').css('opacity', '0');
        $("#close-btn").removeClass("slide-left");
        $("#close-btn").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up")
        $(".menu-links-main-ul li").addClass("slide-down")
    });



    $(".inner-links").click(function () {
        $("#close-btn").removeClass("slide-left");
        $("#close-btn").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up")
        $(".menu-links-main-ul li").addClass("slide-down")
    })


    $("menu-inner-link").click(function () {
        // $("#close-btn").fadeOut();
        $("#close-btn").removeClass("slide-left");
        $("#close-btn").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up")
        $(".menu-links-main-ul li").addClass("slide-down")
        // $('.custom-div2').css('display', 'none');
        // $('.custom-div').css('display', 'none');
        // $('.custom-div2').css('opacity', '0');
        // $('.custom-div').css('opacity', '0');
    })


    // For mobile menu
    $("#how-it-works-btn").click(function () {
        // $("#close-btn2").fadeOut();
        $("#close-btn2").removeClass("slide-left");
        $("#close-btn2").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up");
        $(".menu-links-main-ul li").addClass("slide-down");
        $("body").css("overflow", '');
        $("html").css("overflow", '');
    })
    $("#tuitions-btn-mbl").click(function () {
        // $("#close-btn2").fadeOut();
        $("#close-btn2").removeClass("slide-left");
        $("#close-btn2").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up")
        $(".menu-links-main-ul li").addClass("slide-down");
        $("body").css("overflow", '');
        $("html").css("overflow", '');
    })
    $("#resources-mbl-btn").click(function () {
        // $("#close-btn2").fadeOut();
        $("#close-btn2").removeClass("slide-left");
        $("#close-btn2").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up")
        $(".menu-links-main-ul li").addClass("slide-down")
        $("body").css("overflow", '');
        $("html").css("overflow", '');
    })
    $("#developing-programming-btn-mbl").click(function () {
        // $("#close-btn2").fadeOut();
        $("#close-btn2").removeClass("slide-left");
        $("#close-btn2").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up")
        $(".menu-links-main-ul li").addClass("slide-down")
        $("body").css("overflow", '');
        $("html").css("overflow", '');
    })
    $("#get-in-touch-btn-mbl").click(function () {
        // $("#close-btn2").fadeOut();
        $("#close-btn2").removeClass("slide-left");
        $("#close-btn2").addClass("slide-right");
        $(".menu-links-main-ul li").removeClass("slide-up")
        $(".menu-links-main-ul li").addClass("slide-down")
        $("body").css("overflow", '');
        $("html").css("overflow", '');
    })


    // For Menu Links

    $(".custom-link1").hover(
        // function () {
        //     $('.custom-div2').removeClass('opacityclass');
        // },
        // function () {
        //     $('.custom-div').addClass('opacityclass');
        // },
        // function () {
        //     $('.custom-div').removeClass('opacityclass');
        // }
        function () {
            $('.custom-div').css('display', 'block', 'opacity', '1');
            $('.custom-div').css('opacity', '1');
            $('.custom-div2').css('display', 'none');
            $('.custom-div2').css('opacity', '0');
            $('.custom-div3').css('display', 'none');
            $('.custom-div3').css('opacity', '0');
            $('.custom-div4').css('display', 'none');
            $('.custom-div4').css('opacity', '0');
            $('.custom-div5').css('display', 'none');
            $('.custom-div5').css('opacity', '0');
        },
    );

    $(".custom-link2").hover(

        function () {
            $('.custom-div').css('display', 'none');
            $('.custom-div').css('opacity', '0');
            $('.custom-div2').css('display', 'block');
            $('.custom-div2').css('opacity', '1');
            $('.custom-div3').css('display', 'none');
            $('.custom-div3').css('opacity', '0');
            $('.custom-div4').css('display', 'none');
            $('.custom-div4').css('opacity', '0');
            $('.custom-div5').css('display', 'none');
            $('.custom-div5').css('opacity', '0');
        },
    );

    $(".custom-link3").hover(

        function () {
            $('.custom-div').css('display', 'none');
            $('.custom-div').css('opacity', '0');
            $('.custom-div2').css('display', 'none');
            $('.custom-div2').css('opacity', '0');
            $('.custom-div3').css('display', 'block');
            $('.custom-div3').css('opacity', '1');
            $('.custom-div4').css('display', 'none');
            $('.custom-div4').css('opacity', '0');
            $('.custom-div5').css('display', 'none');
            $('.custom-div5').css('opacity', '0');
        },
    );
    $(".custom-link4").hover(

        function () {
            $('.custom-div').css('display', 'none');
            $('.custom-div').css('opacity', '0');
            $('.custom-div2').css('display', 'none');
            $('.custom-div2').css('opacity', '0');
            $('.custom-div3').css('display', 'none');
            $('.custom-div3').css('opacity', '0');
            $('.custom-div4').css('display', 'block');
            $('.custom-div4').css('opacity', '1');
            $('.custom-div5').css('display', 'none');
            $('.custom-div5').css('opacity', '0');
        },
    );
    $(".custom-link5").hover(

        function () {
            $('.custom-div').css('display', 'none');
            $('.custom-div').css('opacity', '0');
            $('.custom-div2').css('display', 'none');
            $('.custom-div2').css('opacity', '0');
            $('.custom-div3').css('display', 'none');
            $('.custom-div3').css('opacity', '0');
            $('.custom-div4').css('display', 'none');
            $('.custom-div4').css('opacity', '0');
            $('.custom-div5').css('display', 'block');
            $('.custom-div5').css('opacity', '1');
        },
    );


});

// Extra 
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
}

function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
    for (var i = 0; i < cw.length; i++) {
        animateLetterOut(cw, i);
    }

    for (var i = 0; i < nw.length; i++) {
        nw[i].className = 'letter behind';
        nw[0].parentElement.style.opacity = 1;
        animateLetterIn(nw, i);
    }

    currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
    setTimeout(function () {
        cw[i].className = 'letter out';
    }, i * 80);
}

function animateLetterIn(nw, i) {
    setTimeout(function () {
        nw[i].className = 'letter in';
    }, 870 + (i * 80));
}

function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
        var letter = document.createElement('span');
        letter.className = 'letter';
        letter.innerHTML = content.charAt(i);
        word.appendChild(letter);
        letters.push(letter);
    }

    wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 3000);



// Slick for student mobl
// var $status = $('.pagingInfoStudent');
// var $slickElement = $('#students-testimonial-slick');

// $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
//     //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
//     var i = (currentSlide ? currentSlide : 0) + 1;
//     $status.text(i + '/' + slick.slideCount);
// });

// $slickElement.slick({
//     autoplay: true,
//     dots: false
// });

// Get name in multistep form
$(document).ready(function () {
    $("#name-next-desk-btn").click(function () {
        var inputString = $("#name-input-desk").val();
        var spanName = $("#multi-desk-name").html(inputString)
    });
});

$(document).ready(function () {
    $("#name-next-mob-btn").click(function () {
        var inputString = $("#name-input-mob").val();
        var spanName = $("#multi-mob-name").html(inputString)
    });
});



// Email Input 
function validation() {
    let form = document.getElementById('form')
    let email = document.getElementById('email').value
    let text = document.getElementById('text')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "Please enter a valid email address"
        text.style.color = '#ff0000'
    }

    if (email == '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
    }
}

// mboile validation
function validation2() {
    let form = document.getElementById('form2')
    let email = document.getElementById('email2').value
    let text = document.getElementById('text2')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "Please enter a valid email address"
        text.style.color = '#ff0000'
    }

    if (email == '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
    }
}


function validationMultiDesk() {
    let form = document.getElementById('regForm')
    let email = document.getElementById('emailDesktop').value
    let text = document.getElementById('textDeskMulti')
    let nextBtnEmail = document.getElementById('nextEmaildesktop')
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (email.match(pattern)) {
        nextBtnEmail.disabled = false
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
        nextBtnEmail.style.backgroundColor = ''
        nextBtnEmail.style.color = ''

    } else {
        nextBtnEmail.disabled = true
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "Please Enter a Valid Email Address"
        text.style.color = '#ff0000'
        nextBtnEmail.style.backgroundColor = '#a2ffe7'
        nextBtnEmail.style.color = 'gray'

    }

    if (email == '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
    }
}


// function check() {
//     if (!document.getElementById("emailDesktop").checkValidity()) {
//         //do your stuff here  
//         alert("input not valid!");
//     } else {
//         callMeIfValid();
//     }
// }

// function callMeIfValid() {
//     //submit form or whatever
//     alert("valid input");
// }


// Email Multistep validation for mobile

function validationMultiMob() {
    let form = document.getElementById('regForm2')
    let email = document.getElementById('emailMobile').value
    let text = document.getElementById('textMobMulti')
    let nextBtnEmail = document.getElementById('nextEmailmobile')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
        nextBtnEmail.disabled = false
        nextBtnEmail.style.backgroundColor = ''
        nextBtnEmail.style.color = ''
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "Please Enter a Valid Email Address"
        text.style.color = '#ff0000'
        nextBtnEmail.disabled = true
        nextBtnEmail.style.backgroundColor = '#a2ffe7'
        nextBtnEmail.style.color = 'gray'
    }

    if (email == '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
        text.style.color = '#00ff00'
    }
}

function validationPhoneDesk() {
    let phone = document.getElementById('phoneDesk').value
    let patterMob = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    let nextbtnPhoneDesk = document.getElementById('next-btn-phone-desk')

    if (phone.match(patterMob)) {
        nextbtnPhoneDesk.disabled = false
        nextbtnPhoneDesk.style.backgroundColor = ''
        nextbtnPhoneDesk.style.color = ''
    } else {
        nextbtnPhoneDesk.disabled = true
        nextbtnPhoneDesk.style.backgroundColor = '#a2ffe7'
        nextbtnPhoneDesk.style.color = 'gray'
    }

}
// only numbers

function onlyNumberKey(evt) {

    // Only ASCII character in that range allowed 
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}
// Check phone in mob
function validationPhoneMob() {
    let phoneMob = document.getElementById('phoneMob').value
    let patterMobVal = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    let nextbtnPhoneMob = document.getElementById('next-btn-phone-mob')

    if (phoneMob.match(patterMobVal)) {
        nextbtnPhoneMob.disabled = false
        nextbtnPhoneMob.style.backgroundColor = ''
        nextbtnPhoneMob.style.color = ''
    } else {
        nextbtnPhoneMob.disabled = true
        nextbtnPhoneMob.style.backgroundColor = '#a2ffe7'
        nextbtnPhoneMob.style.color = 'gray'
    }
}

// Loader

function removeLoader() {
    let body = document.querySelector('body')

    setTimeout(() => {
        let loader = document.getElementById('loader');

        // hide the loader
        loader.style = 'display: none;';
    }, 3000);
}

