import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IAssignment } from "../../interfaces/IAssignment"

export const assignmentsSlice = createApi({
    reducerPath: "projects",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/assignments",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json")
            return headers
        }
    }),
    endpoints: builder => ({
        read: builder.query<IAssignment[], null>({
            query: () => ({
                url: "/read",
                method: "GET",
            }),
        }),
        create: builder.query<boolean, IAssignment>({
            query: (query) => ({
                url: "/create",
                method: "POST",
                body: query,
            }),
        }),
        update: builder.query<boolean, IAssignment>({
            query: (query) => ({
                url: "/update",
                method: "PUT",
                body: query,

            }),
        }),
        delete: builder.query<boolean, number>({
            query: (query) => ({
                url: "/delete",
                method: "DELETE",
                body: query,
            }),
        })
    })
})

export const {
    useCreateQuery,
    useReadQuery,
    useUpdateQuery,
    useDeleteQuery
} = assignmentsSlice