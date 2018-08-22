const Nightmare = require('nightmare');

Nightmare.action('middleClick', function middleClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const el = document.querySelector(sel);

    const bounds = el.getBoundingClientRect();
    const xPos = bounds.left;
    const yPos = bounds.top;

    // eslint-disable-next-line no-undef
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      screenX: xPos,
      screenY: yPos,
      button: 1,
    });

    return el.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('rightClick', function rightClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const el = document.querySelector(sel);

    const bounds = el.getBoundingClientRect();
    const xPos = bounds.left;
    const yPos = bounds.top;

    // eslint-disable-next-line no-undef
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      screenX: xPos,
      screenY: yPos,
      button: 2,
    });

    return el.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('ctrlClick', function ctrlClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const el = document.querySelector(sel);

    const bounds = el.getBoundingClientRect();
    const xPos = bounds.left;
    const yPos = bounds.top;

    // eslint-disable-next-line no-undef
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      screenX: xPos,
      screenY: yPos,
      ctrlKey: true,
    });

    return el.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('altClick', function altClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const el = document.querySelector(sel);

    const bounds = el.getBoundingClientRect();
    const xPos = bounds.left;
    const yPos = bounds.top;

    // eslint-disable-next-line no-undef
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      screenX: xPos,
      screenY: yPos,
      altKey: true,
    });

    return el.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('shiftClick', function shiftClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const el = document.querySelector(sel);

    const bounds = el.getBoundingClientRect();
    const xPos = bounds.left;
    const yPos = bounds.top;

    // eslint-disable-next-line no-undef
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      screenX: xPos,
      screenY: yPos,
      shiftKey: true,
    });

    return el.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('cmdClick', function cmdClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const el = document.querySelector(sel);

    const bounds = el.getBoundingClientRect();
    const xPos = bounds.left;
    const yPos = bounds.top;

    // eslint-disable-next-line no-undef
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
      screenX: xPos,
      screenY: yPos,
      metaKey: true,
    });

    return el.dispatchEvent(event);
  }, done, selector);
});
