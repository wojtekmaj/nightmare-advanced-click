const Nightmare = require('nightmare');

Nightmare.action('middleClick', function middleClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const element = document.querySelector(s);
    if (!element) {
      throw new Error(`Unable to find element by selector: ${s}`);
    }

    const bounds = element.getBoundingClientRect();
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

    return element.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('rightClick', function rightClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const element = document.querySelector(s);
    if (!element) {
      throw new Error(`Unable to find element by selector: ${s}`);
    }

    const bounds = element.getBoundingClientRect();
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

    return element.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('ctrlClick', function ctrlClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const element = document.querySelector(s);
    if (!element) {
      throw new Error(`Unable to find element by selector: ${s}`);
    }

    const bounds = element.getBoundingClientRect();
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

    return element.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('altClick', function altClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const element = document.querySelector(s);
    if (!element) {
      throw new Error(`Unable to find element by selector: ${s}`);
    }

    const bounds = element.getBoundingClientRect();
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

    return element.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('shiftClick', function shiftClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const element = document.querySelector(s);
    if (!element) {
      throw new Error(`Unable to find element by selector: ${s}`);
    }

    const bounds = element.getBoundingClientRect();
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

    return element.dispatchEvent(event);
  }, done, selector);
});

Nightmare.action('cmdClick', function cmdClickAction(selector, done) {
  this.evaluate_now((sel) => {
    const element = document.querySelector(s);
    if (!element) {
      throw new Error(`Unable to find element by selector: ${s}`);
    }

    const bounds = element.getBoundingClientRect();
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

    return element.dispatchEvent(event);
  }, done, selector);
});
