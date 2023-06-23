import React from 'react';
import { useState } from 'react';
import Shoe from './components/Shoe.jsx';
import './App.css';
import {GiRunningShoe} from 'react-icons/gi';
import {FaTrash} from 'react-icons/fa';
import {AiOutlineFullscreen} from 'react-icons/ai';
import {AiOutlineFullscreenExit} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';

const App = () => {
  const [stock, setStock] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [id2, setId2] = useState('');
  const [name2, setName2] = useState('');
  const [shoes, setShoes] = useState([
    {
      id: 1,
      name: "Adidas Alphabounce",
      stock: 1000
    },
    {
      id: 2,
      name: "Adidas Alphafly",
      stock: 2000
    },
    {
      id: 3,
      name: "Adidas Galactic",
      stock: 3000
    },
    {
      id: 4,
      name: "Adidas Galaxy",
      stock: 4000
    },
  ]);

  const addShoeToFront = (e) => {
    e.preventDefault();
    setShoes([{ id: id, name: name, stock: stock }, ...shoes]);
  };

  const addShoeToBack = (e) => {
    e.preventDefault();
    setShoes([...shoes, { id: id, name: name, stock: stock }]);
  };

  const incrementShoeStock = (e) => {
    e.preventDefault();
    setShoes(shoes.map((shoe) => {
      if (shoe.id == id2) {
        return {
          ...shoe,
          stock: shoe.stock + 1
        }
      } else {
        return shoe
      }
    }))
  };

  const decrementShoeStock = (e) => {
    e.preventDefault();
    setShoes(shoes.map((shoe) => {
      if (shoe.id == id2) {
        return {
          ...shoe,
          stock: shoe.stock - 1
        }
      } else {
        return shoe
      }
    }))
  };

  const removeFirstShoe = (e) => {
    e.preventDefault();
    setShoes(shoes.slice(1));
  };

  const removeLastShoe = (e) => {
    e.preventDefault();
    setShoes(shoes.slice(0, -1));
  };

  const removeShoeById = (e) => {
    e.preventDefault();
    setShoes(shoes.filter((shoe) =>
      shoe.id != parseInt(id2)))
  };

  const removeAllShoes = (e) => {
    e.preventDefault();
    setShoes([]);
  };

  return (
    <>
      <header>
        <div className="logo">
          <GiRunningShoe size={50}/>
          <p>Tugas 5 & 6</p>
        </div>
      </header>
      <main>
        <div>
          {
            shoes.map((value, key) => {
              return <Shoe key={key} name={value.name} id={value.id} stock={value.stock} />
            })
          }
        </div>
        <form className='card'>
          <h1>Tambah</h1>
          <label htmlFor="">ID:</label>
          <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
          <label htmlFor="">Nama:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="">Stok:</label>
          <input type="number" value={stock} onChange={(e) => setStock(parseInt(e.target.value))} />
          <div>
            <button onClick={addShoeToFront}> <AiOutlinePlus/> Depan</button>
            <button onClick={addShoeToBack}> <AiOutlinePlus/> Belakang</button>
          </div>
        </form>
        <form className='card'>
          <h3>Edit/Hapus berdasarkan ID</h3>
          <label htmlFor="">ID:</label>
          <input type="number" value={id2} onChange={(e) => {
            setId2(e.target.value)
            shoes.map((shoe) => {
              if (shoe.id == e.target.value) {
                setName2(shoe.name)
              }
            })
          }} />
          <label htmlFor="">Nama:</label>
          <input type="text" value={name2} onChange={(e) => {
            setName2(e.target.value)
            shoes.map((shoe) => {
              if (shoe.id == id2) {
                shoe.name = e.target.value
                setShoes(shoes)
              }
            })
          }} />
          <label htmlFor="">Stok:</label>
          <div>
            <button onClick={incrementShoeStock}> <AiOutlineFullscreen/> Perbesar</button>
            <button onClick={decrementShoeStock}> <AiOutlineFullscreenExit/> Perkecil</button>
          </div>
            <button onClick={removeShoeById}> <FaTrash/> Hapus</button>
        </form>
        <form className='card'>
          <h1>Hapus</h1>
          <div>
            <button onClick={removeFirstShoe}> <FaTrash/> Depan</button>
            <button onClick={removeLastShoe}> <FaTrash/> Belakang</button>
          </div>
          <button onClick={removeAllShoes}> <FaTrash/> Semua</button>
        </form>
      </main>
    </>
  );
};

export default App