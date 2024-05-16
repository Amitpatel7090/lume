import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

// const site = lume();
// const site = lume({
//     server:{
//       port: 3000
//     },
//     components: {
//       variable: "comp",
//       cssFile: "/components.css",
//       jsFile: "/components.js",
//     },
//   });
const site = lume({
    location: new URL("http://localhost:2000/docs"),
  });
site.use(lumocs());

export default site;
