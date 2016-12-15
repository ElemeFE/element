import ElSteps from './src/steps';
import ElStep from './src/step';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(ElSteps.name, ElSteps);
  Vue.component(ElStep.name, ElStep);
};

export { ElStep, ElSteps };
