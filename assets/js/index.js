const elements = {
  headingWrappers: document.querySelectorAll(".heading-wrapper")
};

feather.replace({ 'stroke-width': 2 });

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

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
      // markers: true,
    }
  });
})
gsap.from(".platter-hero-img", {
  scale: 1.2,
  opacity: 0.25,
  filter: "blur(10px)",
  x: 0,
  delay: 0.35,
  duration: 0.9,
  ease: "expo.out"
})
var mm = gsap.matchMedia();

gsap.to(".platter-hero-img", {
  x: "3%",
  duration: 1,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    scrub: 0.5,
    toggleActions: "play pause resume reverse",
    //markers:true
  }
})

gsap.to(".platter-stamp", {
  rotate: "90deg",
  duration: 1,
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    scrub: 0.35,
    toggleActions: "play pause resume reverse",
    //markers:true
  }
})
gsap.from(".subscription h5", {
  y: 60,
  opacity: 0,
  duration: 0.45,
  delay: 0.5,
  ease: "back.out(1.7)"
})



var slideranimation = gsap.timeline({ ease: "none", repeat: -1 })
slideranimation
  .to(".slider-bob", { left: "92%", duration: 2 })
  .to(".slider-bob", { left: "0%", duration: 2 })

document.querySelectorAll(".value-points").forEach((el, i) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: "top 65%",

      toggleActions: "play pause resume reverse",
      //markers:true
    }
  }).from(el, {
    y: 25,
    opacity: 0,
    delay: i * 0.2,
    //stagger: 0.25,
    duration: 0.6,
    ease: "back.out(1.8)"
  })
  // .fromTo(img, {
  //   opacity: 0,
  //   rotation:5,
  // },
  // {
  //   opacity: 1,
  //   rotation:0,
  //   //stagger: 0.25,
  //   duration: 0.55,
  //   ease: "back.out(1.7)"
  // }, "-=0.3")
})

gsap.set(".features-heading-section", {
  scrollTrigger: {
    trigger: ".features-heading-section",
    pin: true,
    pinSpacing: false,
    endTrigger: ".platter-values",
    end: "top bottom-=50%",
    // markers: {
    //   indent: 100,
    // },
  }
})

gsap.set(".feature-content-container", {
  scrollTrigger: {
    trigger: "#spotlight-img",
    pin: true,
    pinSpacing: true,
    endTrigger: ".feature-body-trends",
    start: "top center-=20%",
    end: "top bottom-=30%",
  }
});

gsap.set(".feature-content-container", {
  scrollTrigger: {
    trigger: "#trends-img",
    pin: true,
    pinSpacing: true,
    endTrigger: ".feature-body-store",
    start: "top center-=20%",
    end: "top bottom-=30%",
  }
});

gsap.set(".feature-content-container", {
  scrollTrigger: {
    trigger: "#spotlight-blur",
    pin: true,
    pinSpacing: true,
    endTrigger: ".feature-body-trends",
    start: "top-=25%",
    end: "top bottom+=30%",
  }
});

gsap.set(".feature-content-container", {
  scrollTrigger: {
    trigger: "#trends-blur",
    pin: true,
    pinSpacing: true,
    endTrigger: ".feature-body-store",
    start: "top-=25%",
    end: "top bottom+=20%",
  }
});

gsap.set(".feature-content-container", {
  scrollTrigger: {
    trigger: "#store-blur",
    pin: true,
    pinSpacing: true,
    endTrigger: ".platter-values",
    start: "top-=25%",
    end: "top bottom+=20%",
  }
});

gsap.set(".feature-content-container", {
  scrollTrigger: {
    trigger: "#store-img",
    pin: true,
    pinSpacing: true,
    endTrigger: ".platter-values",
    start: "top center-=20%",
    end: "top bottom-=15%",
  }
});

gsap.from(".link-card", {
  y: 8,
  opacity: 0,
  stagger: 0.1,
  filter: "blur(5px)",
  duration: 0.35,
  scrollTrigger: {
    trigger: ".links-section",
    start: "top center",
    toggleActions: "play pause resume reverse",
  },

});

document.querySelectorAll(".feature-content").forEach(el => {
  if (!(el.classList.contains("feature-content-last"))) {
    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: 0.5,
        start: "top bottom-=15%",
        toggleActions: "play pause resume reverse",
        //endTrigger: el,
        end: "+=70%",
        //markers:true
      }
    }).set(el, { opacity: 0, scale: 0.65, duration: 1 })
      .to(el, { opacity: 1, scale: 1, duration: 20 })
      .to(el, { opacity: 1, scale: 1, duration: 30 })
      .to(el, { opacity: 1, scale: 1, duration: 30 })
      .to(el, { opacity: 1, scale: 1, duration: 30 })
      .to(el, { opacity: 1, scale: 0.9, duration: 30 })
      .to(el, { opacity: 0.75, scale: 0.8, duration: 20 })
      .to(el, { opacity: 0.3, scale: 0.5, duration: 20 })
      .to(el, { opacity: 0, scale: 0.5, duration: 5 })
      .to(el, { opacity: 0, scale: 0.3, duration: 2 })
  }
  else {
    gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scrub: 4,
        start: "top bottom-=5%",
        toggleActions: "play pause resume reverse",
        endTrigger: el,
        end: "+=70%",
        markers: true
      }
    })
  }
});

function goToTabs(section) {
  gsap.to(window, { duration: 0.3, scrollTo: { y: section, offsetY: 280 }, ease: "none" });
}

const tabs = ["spotlight", "trends", "store"];

tabs.forEach(tab => {
  let section = document.querySelector(".feature-body-" + tab);
  let nav = document.querySelector(".features-link-" + tab);
  // for class toggling - we'll trigger when it's 40% from the top
  ScrollTrigger.create({
    trigger: section,
    start: "top center+=5%",
    end: "bottom center+=5%",
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
        document.querySelector(".features-link").classList.remove("active");
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
  toggleActions: "play pause resume resume",
});






