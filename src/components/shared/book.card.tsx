import React, { useState } from "react";
import { Avatar, List, Space, Button } from "antd";
import { StarTwoTone, DollarTwoTone, PlusSquareOutlined, MinusSquareOutlined  } from '@ant-design/icons';
import { BookCardArg, SelectBook, OrderBooks } from '../../interfaces'

const IconText = ({ icon, text }: { icon: React.FC; text: string | number }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const SelectBooks = ({ id, bookQuantity, addbook, removebook }: SelectBook) => (
  <Space style={{fontSize: '25px', verticalAlign: 'sub'}}>
    <MinusSquareOutlined style={{fontSize: '25px'}} onClick={() => removebook({ ...bookQuantity, id })} />
    {bookQuantity.quantity}
    <PlusSquareOutlined style={{fontSize: '25px'}} onClick={() => addbook({ ...bookQuantity, id })}/>
  </Space>
);

const AddBookInCart = ({ handleAddToCard, bookQuantity }: any) => (
  <Space>
     <Button onClick={() => handleAddToCard(bookQuantity)} type="primary" ghost>
      Add To Cart
    </Button>
  </Space>
)

const BookCard = ({ book, handleSelectedBooks, handleAddToCard }: BookCardArg) => {
  
  const [orderQuantity, setQuantity] = useState<OrderBooks>({id: '', quantity: 0})

  const addBookQuantity = (book: OrderBooks) => {
    const updatedQuantity = { ...book, id: book.id, quantity: book.quantity + 1}
    setQuantity(updatedQuantity)
    handleSelectedBooks(book.id as string, updatedQuantity)
  }
  
  const removeBookQuantity = (book: OrderBooks) => {
    const updatedQuantity = { ...book, id: book.id, quantity: book.quantity > 0 ? book.quantity - 1 : book.quantity}

    setQuantity(updatedQuantity)
    handleSelectedBooks(book.id as string, updatedQuantity)
  }

  return (
    <List.Item
      key={book.title}
      actions={[
        <IconText
          icon={StarTwoTone}
          text={book.rating}
          key="list-vertical-star-o"
        />,
        <IconText
          icon={DollarTwoTone}
          text={book.price}
          key="list-vertical-star-o"
        />,
        <SelectBooks
          id={book._id}
          bookQuantity={orderQuantity}
          addbook={addBookQuantity}
          removebook={removeBookQuantity}
        />,
        <AddBookInCart
          handleAddToCard={handleAddToCard}
          bookQuantity={orderQuantity}
        />
      ]}
      extra={
        <img
          width={150}
          alt="Book Image"
          src={require('../../assets/images/' + book.image)}
        />
      }
    >
      <List.Item.Meta
        avatar={<Avatar src={book.image} />}
        title={<a href={book.image}>{book.title}</a>}
        description={'Author: ' + book.author.name + ' | Languages: ' + book.languages + ' | Genres: ' + book.genres}
      />
      {book.descriptions}
    </List.Item>
  );
};

export default BookCard;
