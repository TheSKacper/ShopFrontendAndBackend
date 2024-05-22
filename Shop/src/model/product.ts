export interface Product{
    id:string,
    title:string,
    category:string,
    description:string,
    price:number,
    image:string
}

export interface RequestProduct{
    title:string,
    category:string,
    description:string,
    price:number,
    image:string
}