import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import incubationService from './incubationService'

const initialState={
    incubation:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''

}

//create incubation
export const createIncubation=createAsyncThunk('incubation/create',
async(incubationData,thunkAPI)=>{
  try {
    const token=thunkAPI.getState().auth.user.token
	console.log("create incubation registration");
    return await incubationService.createIncubation(incubationData,token)
  } catch (error) {
    const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
  }
})

export const getIncubation=createAsyncThunk(
  'incubation/getIncubation',
  async(_,thunkAPI)=>{
    try {
      const token =thunkAPI.getState().auth.user.token
      return await incubationService.getIncubation(token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)

export const getAllIncubation = createAsyncThunk("incubation/getAllIncubation", async (_, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token
		return await incubationService.getAllIncubation(token)
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
		return thunkAPI.rejectWithValue(message)
	}
})




export const incubationSlice=createSlice({
    name:'incubation',
    initialState,
    reducers:{
      reset:(state)=>initialState
    },
    extraReducers: (builder) => {
      builder
			.addCase(createIncubation.pending, (state) => {
				state.isLoading = true
			})
			.addCase(createIncubation.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.incubation.push(action.payload)
			})
			.addCase(createIncubation.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})

			.addCase(getIncubation.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getIncubation.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.incubation = action.payload
			})
			.addCase(getIncubation.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
			})

			// .addCase(getAllIncubation.pending, (state) => {
			// 	state.isLoading = true
			// })
			// .addCase(getAllIncubation.fulfilled, (state, action) => {
			// 	state.isLoading = false
			// 	state.isSuccess = true
			// 	// state.incubation = action.payload
			// })
			// .addCase(getAllIncubation.rejected, (state, action) => {
			// 	state.isLoading = false
			// 	state.isError = true
			// 	state.message = action.payload
			// })
        
    },


})

export const{reset}=incubationSlice.actions
export default incubationSlice.reducer