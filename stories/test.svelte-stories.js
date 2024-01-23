import { storiesOf } from '@storybook/svelte';
// import { action } from '@storybook/addon-actions';

// import TestReactComponent from '../src/testComponentGroup/TestReactComponent';
import TestSvelteComponent from '../src/testComponentGroup/TestSvelteComponent.svelte';

storiesOf('TestSvelteComponent', module)
  .add('Svelte Test', () => ({
    Component: TestSvelteComponent
  }));

// var app = new App({
// 	target: document.body
// });