import { IProject } from "./IProject"

export interface IAssignment {
    id: number 
    title: string
    description: string
    projectId: IProject
    status: "Doing" | "Finiched" | "NotStarted"
}