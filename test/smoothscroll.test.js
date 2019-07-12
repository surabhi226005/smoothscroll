import clone from 'lodash.clonedeep';
import smoothscroll from '../src/smoothscroll';
import test from 'ava';

// mock window object
const mockedWindow = {
  Element: {
    prototype: {
      scroll: f => f,
      scrollBy: f => f,
      scrollIntoView: f => f
    }
  },
  scroll: f => f,
  scrollBy: f => f,
  navigator: {
    userAgent: 'test'
  },
  performance: {
    now: f => f
  },
  requestAnimationFrame: f => f
};

// mock document object
const mockedDocument = {
  documentElement: {
    style: {}
  }
};

// expose clean browser objects as global
test.beforeEach(() => {
  global.window = clone(mockedWindow);
  global.document = clone(mockedDocument);
});

// clean browser objects after each test
test.afterEach.always(() => {
  global.window = null;
  global.document = null;
});

test('polyfill is available as method', t => {
  t.truthy(typeof smoothscroll.polyfill === 'function');
});
