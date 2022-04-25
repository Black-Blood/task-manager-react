import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IProject } from "../../interfaces/IProject"

export const projectsSlice = createApi({
    reducerPath: "projects",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8080/projects",
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json")
            return headers
        }
    }),
    endpoints: builder => ({
        read: builder.query<IProject[], null>({
            query: () => ({
                url: "/read",
                method: "GET",
            }),
        }),
        create: builder.query<boolean, IProject>({
            query: (query) => ({
                url: "/create",
                method: "POST",
                body: query,
            }),
        }),
        update: builder.query<boolean, IProject>({
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
} = projectsSlice