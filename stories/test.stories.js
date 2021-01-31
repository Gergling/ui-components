import React from 'react';
import SvelteComponent from 'react-svelte';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TestReactComponent from '../src/testComponentGroup/TestReactComponent';
import TestSvelteComponent from '../src/testComponentGroup/TestSvelteComponent.svelte';

storiesOf('TestReactComponent', module)
  .add('React Test', () => <TestReactComponent/>);

storiesOf('TestSvelteComponent', module)
  .add('React-Svelte Test', () => <SvelteComponent this={TestSvelteComponent}/>);
