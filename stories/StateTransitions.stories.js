import SlideToggle from "../src/components/SlideToggle.vue";
import StateTransitions from "../src/components/StateTransitions.vue";
import ListTransitions from "../src/components/ListTransitions.vue";
import ModalTransitions from "../src/components/ModalTransitions.vue";
import CardAppearAnimation from "../src/components/CardAppearAnimation.vue";
import ExpandCollapseCompoenent from "../src/components/ExpandCollapse.vue";
import NavigationComponent from "../src/components/Navigation.vue";
import ProgressSteps from "../src/components/ProgressSteps.vue";

import "../src/styles/global.css";

export default { title: 'Animations' };

export const Slides = () => ({
  components: { SlideToggle },
  template: '<SlideToggle />'
});
export const State = () => ({
  components: { StateTransitions },
  template: '<StateTransitions />'
});
export const Lists = () => ({
  components: { ListTransitions },
  template: '<ListTransitions />'
});
export const Modal = () => ({
  components: { ModalTransitions },
  template: '<ModalTransitions />'
});
export const Cards = () => ({
  components: { CardAppearAnimation },
  template: '<CardAppearAnimation />'
});
export const ExpandCollapse = () => ({
  components: { ExpandCollapseCompoenent },
  template: '<ExpandCollapseCompoenent />'
});
export const Progress = () => ({
  components: { ProgressSteps },
  template: '<ProgressSteps />'
});
export const Navigation = () => ({
  components: { NavigationComponent },
  template: '<NavigationComponent />'
});