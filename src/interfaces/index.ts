import React, { Dispatch } from 'react'

export interface Author {
    name: string;
    phone: number;
    address: string;
}

export interface Books {
    _id: string;
    title: string;
    author: Author;
    descriptions: string;
    genres: string;
    image: string;
    languages: string[];
    publishDate: Date;
    price: number;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface OrderBooks {
    id: string | number;
    quantity: number;
}

export interface SelectedBooks {
    [key: string]: OrderBooks;
}

export interface BookCardArg {
    book: Books;
    bookQuantity: OrderBooks;
    handleSelectedBooks: (id: string, orderBook: OrderBooks) => void;
    handleAddToCard: (orderBook: OrderBooks) => void;
}

export interface SelectBook {
    id: string;
    bookQuantity: OrderBooks;
    addbook: Dispatch<OrderBooks>;
    removebook: Dispatch<OrderBooks>;
}
