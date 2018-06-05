import { shallowMount } from "@vue/test-utils";
import Navigation from "@/components/Navigation.vue";

describe("Component Navigation", () => {
  it("renders a nav element", () => {
    const wrapper = shallowMount(Navigation, {
      stubs: ["router-link"]
    });
    expect(wrapper.contains("nav")).toBe(true);
  });
});
