import React from 'react';
export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};

import { Provider } from '../src/core/provider'


export const decorators = [
  Story => (
    <Provider>
      <Story />
    </Provider>
  ),
];
