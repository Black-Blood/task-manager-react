import { IAssignment } from "./IAssignment"

export interface IProject {
    id: number 
    title: string
    description: string
    assignments: IAssignment[]
}