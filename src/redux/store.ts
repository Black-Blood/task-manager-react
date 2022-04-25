import { configureStore } from "@reduxjs/toolkit"
import { assignmentsSlice } from "./slice/assignmentsSlice"
import { projectsSlice } from "./slice/projectsSlice"

const store = configureStore({
    reducer: {
        [assignmentsSlice.reducerPath]: assignmentsSlice.reducer,
        [projectsSlice.reducerPath]: projectsSlice.reducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch