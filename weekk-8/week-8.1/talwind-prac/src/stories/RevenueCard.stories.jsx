import { RevenueCard } from "../components/RevenueCard";
// import { Button } from "./Button";

export default {
  component: RevenueCard,
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary = {
  args: {
    orderCount: "123",
    title: "storyp",
    amount: "50000",
  },
};
