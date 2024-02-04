let tl = gsap.timeline({delay : 1})

tl.from(
    ".logo-img",{
       y : -100,
      duration : 1,
      opacity : 0,
      rotate : 90,
    }
)
tl.from(
    ".header_ul li",{
       y : -100,
      duration : 1,
      stagger : 0.2,
      rotate : -90,
      opacity : 0
    }
)

gsap.from(
    ".header_btn",{
    scale :0.2,
    x : 200,
      duration : 1,
      rotate : 180,
      opacity : 0,
      delay : 5
    }
)
gsap.from(
    ".text-shadow",{
      x : -500,
      opacity : 0,
      delay : 5,
      duration : 1,
    }
)
gsap.from(
  ".home-p",{
    x : 600,
  opacity : 0,
  duration : 1.5,
  delay :6,
  rotate : 180,
})

gsap.from(
    ".tbtn",{
      x : -600,
      opacity : 0,
      duration : 1,
      delay : 7,
      rotate : 120,
      // scrollTrigger : {
      //   trigger : ".tbtn",
      //   scroller : "body",
      //   scrub : 1
      // }
    }
)
gsap.from(".yogadescription_item1",{
  scale : 0,
  opacity: 0,
  duration : 2,
  delay : 6,
  scrollTrigger : {
    trigger : ".yogadescription_item1",
    scroller : "body",
    scrub : 1
  }
})
gsap.from(".yogadescription_item2",{
  scale : 0,
  opacity: 0,
  duration : 2,
  scrollTrigger : {
    trigger : ".yogadescription_item2",
    scroller : "body",
    scrub : 1
  }
})
gsap.from(".yogadescription_item3",{
  scale : 0,
  opacity: 0,
  duration : 2,
  scrollTrigger : {
    trigger : ".yogadescription_item3",
    scroller : "body",
    scrub : 1
  }
})
gsap.from(".section1_h2",{
  scale : 0,
  opacity: 0,
  duration : 1,
  scrollTrigger : {
    trigger : ".section1_h2",
    scroller : "body",
    scrub : 1
  }
})
gsap.from(".description_btn",{
  scale : 0,
  opacity: 0,
  duration : 1,
  scrollTrigger : {
    trigger : ".description_btn",
    scroller : "body",
    scrub : 1
  }
})

gsap.from(".description_up,.description_down",{
  scale : 0,
  opacity: 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".description_up,.description_down",
    scroller : "body",
    scrub : 1
  }
})
gsap.from(".section1_card1,.section1_card2,.section1_card3",{
  scale : 0,
  opacity: 0,
  duration : 2,
  scrollTrigger : {
    trigger : ".section1_card1,.section1_card2,.section1_card3",
    scroller : "body",
    scrub : 1
  }
})
gsap.from(".section2_left",{
  scale : 0,
  opacity: 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".section2_left",
    scroller : "body",
    scrub : 1
  }
})
gsap.from(".section2_right",{
  scale : 0,
  opacity: 0,
  duration : 0.5,
  delay : 4,
  scrollTrigger : {
    trigger : ".section2_right",
    scroller : "body",
    scrub : 1
  }
})
gsap.from(".section3_left",{
  scale : 0,
  opacity: 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".section3_left",
    scroller : "body",
    scrub : 1
  }
})
gsap.from(".section3_right",{
  scale : 0,
  opacity: 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".section3_right",
    scroller : "body",
    scrub : 1
  }
})
gsap.to(".section4_reviews .boxes_reviews",{
  x : "-450%",
  duration : 1,
  fontWeight : 900,
  stagger : 0.01,
  scrollTrigger : {
    trigger : ".section4_reviews",
    scroller : "body",
    scrub : 3,
    pin : true
  }
})


gsap.from(".teachers-info a",{
  y : "100%",
  opacity : 0,
  duration : 1,
  stagger : 0.1,
  scale : 0,
  scrollTrigger : {
    trigger : ".teachers-info a",
    scroller : "body",
    scrub : 3
  }
})
gsap.from(".yoga-teachers .left-content",{
  scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".teachers-info a",
    scroller : "body",
    scrub : 1
  },
})
gsap.from(".why-yoga_about",{
  scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".why-yoga_about",
    scroller : "body",
    scrub : 1,
  },
})
gsap.from(".bg-img",{
  scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".bg-img",
    scroller : "body",
    scrub : 1,
  },
})
gsap.from(".bgimage",{
  scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".bgimage",
    scroller : "body",
    scrub : 1,
  },
})
gsap.from(".membership-plan",{
  transform : "rotatex(180)",
  scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".membership-plan",
    scroller : "body",
    scrub : 1,
  },
})
gsap.from(".yoga-banner",{
  scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".yoga-banner",
    scroller : "body",
    scrub : 1,
  },
})

let a = gsap.timeline()

a.from(".make-yoga-partner_left-content",{
 scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".make-yoga-partner_left-content",
    scroller : "body",
    scrub : 1,
  },
})
a.from(".make-yoga-partner img",{
  scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".make-yoga-partner img",
    scroller : "body",
    scrub : 1,
  },
})
a.from(".make-yoga-partner_right-content",{
  scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".make-yoga-partner_right-content",
    scroller : "body",
    scrub : 1,
  },
})
gsap.from(".footer_content .d-class",{
  scale : 0,
  opacity : 0,
  duration : 0.5,
  scrollTrigger : {
    trigger : ".footer_content",
    scroller : "body",
    scrub : 1,
  },
})



