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
    UnitJS: 'writable',
    $: 'writable',
    requiredError: 'readonly',
    FIXTURES: 'readonly',
  },
};
