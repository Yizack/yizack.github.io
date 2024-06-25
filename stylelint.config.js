export default {
  extends: "stylelint-config-standard-scss",
  rules: {
    "length-zero-no-unit": true,
    "rule-empty-line-before": ["always-multi-line", { except: ["first-nested"] }],
    "color-function-notation": ["modern", { ignore: ["with-var-inside"] }]
  },
  ignoreFiles: [
    "node_modules/**/*",
    ".nuxt/**/*",
    "dist/**/*",
    ".output/**/*"
  ]
};
