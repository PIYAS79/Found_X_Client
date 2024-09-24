export interface Post_Type {
    _id: string;
    title: string;
    description: string;
    images: string[];
    location: string;
    city: string;
    dateFound: string;
    status: string;
    isReported: boolean;
    reportCount: number;
    category: Category_Type;
    user: User_Type;
    questions: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Category_Type {
    _id: string;
    name: string;
    postCount: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface User_Type {
    _id: string;
    name: string;
    role: string;
    email: string;
    status: string;
    mobileNumber: string;
    profilePhoto: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}