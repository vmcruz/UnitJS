export const CSS_VALUE_REGEX =
  /(?<value>.+?)(?:\s+!(?<important>important))?\s*$/i;

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const SHORTCUT_EVENTS = [
  // Mouse
  'click',
  'dblclick',
  'mousedown',
  'mouseup',
  'mousemove',
  'mouseenter',
  'mouseleave',
  'mouseover',
  'mouseout',
  'auxclick',
  'contextmenu',
  'wheel',

  // Pointer (covers mouse, touch, pen)
  'pointerdown',
  'pointerup',
  'pointermove',
  'pointerenter',
  'pointerleave',
  'pointercancel',

  // Keyboard
  'keydown',
  'keyup',
  'keypress',

  // Touch
  'touchstart',
  'touchend',
  'touchmove',
  'touchcancel',

  // Drag & Drop
  'drag',
  'dragstart',
  'dragend',
  'dragenter',
  'dragleave',
  'dragover',
  'drop',

  // Scroll & focus
  'scroll',
  'focus',
  'blur',

  // Form
  'input',
  'change',
  'submit',
];
