import React, { useState } from "react";
import { useQuery } from "react-query";
import { List, Input } from 'antd';
import { OrderBooks, Books, SelectedBooks} from '../../interfaces'
import BookCard from "../shared/book.card";
import { getBooks } from "./book.store.service";
import "./book.store.css";

const { Search } = Input;

const BookStore: React.FC = (): any => {
  const [orderBooks, setOrderBooks] = useState<OrderBooks[]>([]);
  const [selectedBooks, setSelectbooks] = useState<SelectedBooks>({});
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, refetch: fetchbooks } = useQuery(["Fetch_Books", searchValue], getBooks);
  
  const onSearch = (value: string) => {
    setSearchValue(value)
    fetchbooks()
  };

  const addBooks = (book: OrderBooks) => {
    console.log("add book", book)
    const bookOrder = selectedBooks[book.id] ? selectedBooks : {}
    bookOrder[book.id] = book
    bookOrder[book.id].quantity = !bookOrder[book.id].quantity ? 1 : bookOrder[book.id].quantity + 1
    setSelectbooks({...selectedBooks, ...bookOrder})
  }

  const removeBooks = (book: OrderBooks) => {
    // setOrderBooks({})
  }

  const handleSelectedBooks = (id: string, orderBook: OrderBooks) => {
    const bookOrder = {
      ...selectedBooks
    }
    bookOrder[id] = orderBook

    setSelectbooks(bookOrder)
  }

  const handleAddToCard = (orderBook: OrderBooks) => {
    console.log('handleAddToCard', orderBook )
    console.log('selectedBooks', selectedBooks )
  }

  return (
    <div className="book-container">
      <div style={{ textAlign: 'center'}}>
        <h1>Online Books Store</h1>
      </div>
      <div style={{textAlign: 'right', padding: '0 2%'}}>
        <Search style={{width: '250px'}} placeholder="Search Book" title="Search By Title or Author" onSearch={onSearch} enterButton />
      </div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={data}
        renderItem={(item: Books) => (<BookCard
          book={item}
          bookQuantity={selectedBooks[item._id] || { id:'', quantity: 0}}
          handleSelectedBooks={handleSelectedBooks}
          handleAddToCard={handleAddToCard}
        />)}
      />
    </div>
  );
};

export default BookStore;
