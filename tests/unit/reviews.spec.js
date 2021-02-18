import reviews from "@/components/reviews.vue";
import { shallowMount } from "@vue/test-utils";

describe("reviews.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(reviews, {});
  });
  it("does h1 exist", () => {
    expect(wrapper.find("h1").text()).toBe("What our users say about shahry?");
  });
  it("addReviewForm to be false by default", () => {
    expect(wrapper.vm.$data.addReviewForm).toBeFalsy;
  });
  it(" on clicking add a review the addReviewClicked turns true to get the modal", () => {
    wrapper.find("button.white-button").trigger("click");
    expect(wrapper.vm.$data.addReviewForm).toBeTruthy;
  });
});
