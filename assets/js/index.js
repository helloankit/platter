 const elements =  {
    headingWrappers : document.querySelectorAll(".heading-wrapper")
}; 

feather.replace();

gsap.registerPlugin(ScrollTrigger);
elements.headingWrappers.forEach(el => {
  var headingParts = el.getElementsByClassName("heading-animate-part");
  gsap.from(headingParts,{
    opacity : 0,
    y:30,
    stagger:0.2,
    scrollTrigger: {
      trigger: el,
      start: "top center",
      toggleActions: "play pause resume reverse",
      //markers: true,
    }
  });
})


// init controller
// var controller = new ScrollMagic.Controller({ addIndicators: true });

gsap.from(".value-points", {
  y:25,
  opacity:0,
  stagger:0.15, 
  duration: 0.35,
  scrollTrigger:{
    trigger:".value-points-wrapper",
    start:"center bottom",
    toggleActions: "play pause resume reverse",
    //markers:true
  }
})

gsap.set(".features-heading-section", {
  scrollTrigger:{
    trigger:".features-heading-section",
    pin:true,
    pinSpacing:false,
    endTrigger:".links-section",
    end:"top bottom",
    // markers: {
    //   indent:100,
    // },
  }
})

document.querySelectorAll(".feature-content").forEach(el => {
  var headingParts = el.getElementsByClassName("text");

  gsap.timeline({
  
    scrollTrigger: {
      trigger: el,
      scrub:0.3,
      start: "top center+=20%",
      toggleActions: "play pause resume reverse",
      endTrigger:el,
      end: "top center-=20%",
      // markers: {
      //   indent:30,
      //   startColor: "blue", endColor: "pink"
      // },
    }
  }).to(el, { opacity: 1, scale: 1, duration:5})
  .to(el, { opacity: 0, scale:0.8, duration:1})
  });

   




    

