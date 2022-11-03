// import 'zone.js/testing';
import 'jest-preset-angular/setup-jest';
import '@testing-library/jest-dom';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});
