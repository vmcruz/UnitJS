module.exports = {
  extends: 'airbnb-base',
  env: {
    browser: true,
    jasmine: true,
  },
  rules: {
    'no-param-reassign': ['error', { props: false }],
  },
  globals: {
    UnitJS: true,
    $: true,
    requiredError: true,
    FIXTURES: true,
  },
};
