import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { id: number; boxId: number; url: string }[] = [];

export const nftsSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    updateNFTs: (
      state,
      action: PayloadAction<{ id: number; boxId: number; url: string }[]>
    ) => {
      console.log("updateNFTs", action.payload);
      return (state = action.payload);
    },
    // resetNFTs: (state, action?: PayloadAction<undefined>) => {
    //   state = [];
    // },
    addNFT: (
      state,
      action: PayloadAction<{
        id: number;
        boxId: number;
        url: string;
      }>
    ) => {
      console.log("add", action.payload);
      return state.concat(action.payload);
    },
  },
});

export const { updateNFTs, addNFT } = nftsSlice.actions;

export default nftsSlice.reducer;
