import lume from "lume/mod.ts";
import lumocs from "lumocs/mod.ts";

const site = lume({
    server: {
      port: 4000,
    },
    prettyUrls: false,

    dest: "./output"

  
  });
//   site.copy("codees");
site.copy([".jpg", ".gif", ".png",".webp"]);

site.use(lumocs());

export default site;


// import lume from "lume/mod.ts";
// import markdown from "lume/plugins/markdown.ts";
// import date from "lume/plugins/date.ts";
// import { copy } from "../../UsingPrivateRepo/vendor/deno.land/std@0.193.0/streams/copy.ts";

// const site = lume({
//   location: new URL("https://example.com/"),
//   src: "src",
//   dest: "public",
//   // Add your images directory to the copy option
//   copy: ["images"],
// });

// site.use(markdown());
// site.use(date());

// export default site;