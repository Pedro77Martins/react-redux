import { loadingSliceDef } from "./loadingSlice.js";

function testLoadingSlice() {
  const fakeState = {
    value: {
      completed: true,
    },
  };
  loadingSliceDef.reducers.loadingStarted(fakeState);
  if (fakeState.value.completed) {
    throw new Error("It failed");
  } else {
    console.log("the loadingStarted reducer works!");
  }
}

testLoadingSlice();
