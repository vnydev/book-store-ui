import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query'
// import logo from './logo.svg';
import './App.css';
import BookStore from './components/book-store'

function App() {

  const queryClient = new QueryClient()

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BookStore />
      </QueryClientProvider>
    </div>
  );
}

export default App;
