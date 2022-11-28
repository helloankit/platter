const elements = {
  headingWrappers: document.querySelectorAll(".heading-wrapper")
};

feather.replace();

gsap.registerPlugin(ScrollTrigger);

elements.headingWrappers.forEach(el => {
  var headingParts = el.getElementsByClassName("heading-animate-part");
  gsap.from(headingParts, {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    scrollTrigger: {
      trigger: el,
      start: "top center",
      toggleActions: "play pause resume reverse",
      //markers: true,
    }
  });
})
gsap.from(".platter-hero-img", {
  scale:1.2,
  opacity:0.25,
  filter: "blur(10px)",
  x:0,
  delay:0.35,
  duration: 0.7,
  ease: "power2.out"
})
gsap.to(".platter-hero-img", {
  x: "50%",
  duration: 1,
  scrollTrigger: {
    trigger: ".platter-hero-img",
    start: "top top",
    scrub:0.5,
    toggleActions: "play pause resume reverse",
    //markers:true
  }
})
var slideranimation = gsap.timeline({ ease: "none", repeat: -1 })
slideranimation
.to(".slider-bob", {left:"97%", duration:3})
.to(".slider-bob", {left:"0%", duration:3})


gsap.from(".value-points", {
  y: 25,
  opacity: 0,
  stagger: 0.15,
  duration: 0.35,
  scrollTrigger: {
    trigger: ".value-points-wrapper",
    start: "center bottom",
    toggleActions: "play pause resume reverse",
    //markers:true
  }
})

gsap.set(".features-heading-section", {
  scrollTrigger: {
    trigger: ".features-heading-section",
    pin: true,
    pinSpacing: false,
    endTrigger: ".links-section",
    end: "top bottom",
    // markers: {
    //   indent:100,
    // },
  }
})

document.querySelectorAll(".feature-content").forEach(el => {
  gsap.timeline({
    scrollTrigger: {
      trigger: el,
      scrub: true,
      start: "top bottom-=5%",
      toggleActions: "play pause resume reverse",
      endTrigger: el,
      end: "+=60%",
      // markers: {
      //   indent:30,
      //   startColor: "blue", endColor: "pink"
      // },
    }
  }).set(el, { opacity: 0, scale: 0.8, duration: 1 })
    .to(el, { opacity: 1, scale: 1, duration: 5 })
    .to(el, { opacity: 0, scale: 0.8, duration: 1 })
});

const tabs = ["spotlight", "trends", "store"];

tabs.forEach(tab => {
  let section = document.querySelector(".feature-body-" + tab);
  let nav = document.querySelector(".features-link-" + tab);
  // for class toggling - we'll trigger when it's 40% from the top
  ScrollTrigger.create({
    trigger: section,
    start: "top center+=15%",
    end: "bottom center+=15%",
    toggleActions: "play pause resume reset",
    toggleClass: { targets: nav, className: "active" },
    // markers: {
    //   indent:200,
    //   startColor: "blue", endColor: "pink"
    // },
    onLeaveBack: (event) => {
      if (event.vars.trigger.className == "feature-body-spotlight") {
        //console.log(event.vars.trigger.className);
        document.querySelector(".features-link-spotlight").classList.add("active");
      } else {
        document.querySelector(".features-link-spotlight").classList.remove("active");
      }

    },
    onLeave: (event) => {
      if (event.vars.trigger.className == "feature-body-store") {
        document.querySelector(".features-link-store").classList.add("active");
      }

    }
  });
});

var transformY = 40;
var var_visible = { opacity: 1, y: 0, duration: 0.5 };
var var_moveup = { opacity: 1, duration: 0.4 };
var var_fadeout = { opacity: 0, scale: 0.9, duration: 0.3, };

var scrollAnimation = gsap.timeline({ ease: "back.out(1.7)", repeat: -1 })
  .set(".scrolltext", { opacity: 0, y: transformY })
  .to(".scrolltext-wallet", var_visible)
  .to(".scrolltext-wallet", var_moveup, "=+0.6")
  .to(".scrolltext-wallet", var_fadeout, "=-0.2")

  .to(".scrolltext-keys", var_visible)
  .to(".scrolltext-keys", var_moveup, "=+0.6")
  .to(".scrolltext-keys", var_fadeout, "=-0.2")

  .to(".scrolltext-token", var_visible)
  .to(".scrolltext-token", var_moveup, "=+0.6")
  .to(".scrolltext-token", var_fadeout, "=-0.2")

ScrollTrigger.create({
  trigger: ".why-content",
  start: "top center-=10%",
  animation: scrollAnimation,
  //markers:true,
  delay: 1,
  toggleActions: "play pause resume reset",
});






