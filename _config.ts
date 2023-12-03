import lume from "lume/mod.ts";

const site = lume({
  src: "./src",
  dest: "./gabrielgoncalveso.github.io",
  emptyDest: false,
});

site.copy("index.html");
site.copy("404.html");
site.copy("styles", "styles");
site.copy("assets", "assets");

export default site;
