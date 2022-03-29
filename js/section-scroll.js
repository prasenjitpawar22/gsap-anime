gsap.registerPlugin("ScrollTrigger");
let panels = gsap.utils.toArray(".card__content");

let mainLine = gsap.timeline(
  document.querySelectorAll(".box").forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      markers: true,
      // scrub: true,
      start: "40% 40%",
      pin: true,
      // pinSpacing: false,
      end: "+=613",
      // snap: { snapTo: [0.5], duration: 1, delay: 0 },
      onEnter: ({ progress, direction, isActive }) => {
        // console.log("onEnter", progress, direction, isActive);
        let numb = item.childNodes[3].className;
        // console.log("asdasdas", numb);
        numb = "." + numb;
        gsap.fromTo(
          item,
          {
            // y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0,
          }
        );
      },
      onLeave: ({ progress, direction, isActive }) => {
        // console.log("onLeave", progress, direction, isActive);
        gsap.fromTo(
          item,
          {
            // y: 0,
            opacity: 1,
          },
          {
            // y: -80,
            opacity: 0,
            stagger: 0.05,
            duration: 0,
          }
        );
      },
      onLeaveBack: ({ progress, direction, isActive }) => {
        // console.log("onLeaveBack", progress, direction, isActive);

        gsap.fromTo(
          item,
          {
            // y: 0,
            opacity: 1,
          },
          {
            // y: -80,
            opacity: 0,
            stagger: 0.05,
            duration: 0,
          }
        );
      },
      onEnterBack: ({ progress, direction, isActive }) => {
        // console.log("onEnterBack", progress, direction, isActive);
        gsap.fromTo(
          item,
          {
            // y: -80,
            opacity: 0,
          },
          {
            // y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0,
          }
        );
      },
    });
  })
);

let sec = gsap.timeline();

sec.to(".svg-one", {
  scrollTrigger: {
    trigger: ".box1",
    id: "svg-one",
    // start: "1% 40%",
    start: "top 40%",
    end: "+=859 40%",
    toggleActions: "restart none none reset",
    markers: { startColor: "orange", endColor: "orange" },
    onEnter: () => {
      console.log("enter svg 1");
      gsap.fromTo(
        ".svg-one",
        { backgroundColor: "transparent" },
        { backgroundColor: "indigo" }
      );
      gsap.fromTo(
        ".transrgwht",
        { strokeDasharray: "10, 1000" },
        { strokeDasharray: "10, 1000", delay: 1 }
      );
    },
    onEnterBack: () => {
      console.log("enter back svg 1");
      gsap.fromTo(".svg-one", {}, { backgroundColor: "indigo" });
      gsap.fromTo(
        ".transrgwht",
        { strokeDasharray: "143, 1000" },
        { strokeDasharray: "10, 1000", delay: 0.2 }
      );
    },
    onLeave: () => {
      console.log("out svg1");
    },
  },
  // backgroundColor: "indigo",
});
sec.to(".box2", {
  scrollTrigger: {
    trigger: ".box2",
    id: "svg-two",
    start: "40% 40%",
    end: "+=613 40%",
    toggleActions: "restart none none reset",
    markers: { startColor: "black", endColor: "black" },
    toggleActions: "restart none none reset",
    onEnter: () => {
      console.log("enter svg 2");
      gsap.fromTo(
        ".svg-two",
        { backgroundColor: "transparent" },
        { backgroundColor: "#006fff", duration: 0 }
      );
      gsap.fromTo(
        ".transrgwht",
        { strokeDasharray: "10, 1000" },
        { strokeDasharray: "143, 1000" }
      );
    },
    onEnterBack: () => {
      console.log("enter back svg 2");
      gsap.fromTo(".svg-two", {}, { backgroundColor: "#006fff" });
    },
    onLeave: () => {
      console.log("leave svg 2");

      gsap.fromTo(
        ".transrgwht",
        { strokeDasharray: "143, 1000" },
        { strokeDasharray: "10, 1000" }
      );
    },
    onLeave: () => {
      console.log("out svg2");
    },
  },
  // backgroundColor: "#006fff",
});

// sec.to(".svg-two", {
//   scrollTrigger: {
//     trigger: ".svg-two",
//     markers: true,
//     id: "svg-2",
//     toggleActions: "restart pause resume reset",
//   },
//   backgroundColor: "#006fff",
// });

// sec.to(".svg-three", {
//   scrollTrigger: {
//     trigger: ".svg-three",
//     markers: true,
//     id: "svg-3",
//     toggleActions: "restart pause resume reset",
//   },
//   backgroundColor: "indigo",
//   duration: 1,
// });
