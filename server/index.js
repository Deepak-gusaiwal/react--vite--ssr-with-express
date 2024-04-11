require("ignore-styles"); // disabled rendering styles
require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});
require("./server");
