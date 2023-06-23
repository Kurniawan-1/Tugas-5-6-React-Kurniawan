import React from 'react'

const Shoe = ({ id, name, stock }) => (
    <div className="card">
        <h3>
            ({id}) {name}
        </h3>
        <div>Stok: {stock.toLocaleString("id-ID")}</div>
    </div>
);


export default Shoe