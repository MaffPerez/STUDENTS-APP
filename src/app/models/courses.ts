export interface Courses {
    firstName: any;
    id: string;
    category: string;
    name: string;
    modalidad: string;
    profesor: string;
    alumnos: Alumnos[]
}

export interface Alumnos {
    firstName: string;
    lastName: string;
    id: string;
    status: string;
    email: string;
}