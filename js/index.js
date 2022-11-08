console.log("this worked");

$(".navInteraction").hover(function () {
  $(this).toggleClass("active");
}
);

  $(document).on("click",".navInteraction",function(){
    answer = $(this);
    if($("a").hasClass("clicked")){
        $(document).find("a").removeClass("clicked");
        answer.addClass("clicked");
    }else{
        answer.addClass("clicked");
    }
});

function scrollWin() {
  window.scrollTo(500, 500);
  console.log("I made it");
}

$("button").hover(function () {
  $(this).toggleClass("active");
}
);

$(".toggleProject").hover(function () {
  $(this).toggleClass("active");
}
);
$(".hoverText").hover(function () {
  $(this).toggleClass("active");
}
);

$(window).scroll(function () {
  $("span").css("display", "inline").fadeOut("slow");
});

let section = document.querySelectorAll('.sectionFunction');
let lists = document.querySelectorAll('.hide-mobile ul li');
function activeLink(li) {
  lists.forEach((item) => item.classList.remove('active'));
  li.classList.add('active');
}
lists.forEach((item) =>
  item.addEventListener('click', function () {
  }));

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY + (window.innerHeight/3);
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (id=='contact'){
      console.log(Math.round(window.scrollY + window.innerHeight));
      console.log(offset+height);   
      if(Math.round(window.scrollY + window.innerHeight)==(offset+height)){
        console.log(window.scrollY + window.innerHeight);
        console.log(offset+height);        
        const target = document.querySelector(`[href='#${id}']`).parentElement;
        activeLink(target);
        console.log(`[href='#${id}']`);
        
      }
    }

    else if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`).parentElement;
      activeLink(target);
      console.log(`[href='#${id}']`);
    }
  })
};
