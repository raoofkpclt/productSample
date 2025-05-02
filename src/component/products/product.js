import React, { useState } from "react";
import {phoneData} from "./productData";
import { Card, Button } from "react-bootstrap";

const Product = () => {

    const [items,setItem]=useState(phoneData)

    const decQ=(id)=>{
        const newItem=items.map((item)=>
            item.id===id && item.qty>1?{...item,qty:item.qty-1}:item
        )
        setItem(newItem)
    }
    const incQ=(id)=>{
        const newItem=items.map((item)=>
            item.id===id && item.qty<6?{...item,qty:item.qty+1}:item
        )
        setItem(newItem)
    }
  return (
    <div>
        <h1>Products</h1>
        {items.map((item)=>(
            <div className="d-inline-flex">
            <Card className="shadow p-3 m-2 bg-body-tertiary" style={{ width: "13rem" }}>
        <Card.Img  style={{ height: "12rem" }} className="p-2" variant="top" src={require(`./assets/${item.image}.jpeg`)} />
        <Card.Body>
          <Card.Title>{item.model}</Card.Title>
          <Card.Text>
           {item.desc}
          </Card.Text>
          <h5>Price:₹ {item.price}</h5>
          <div>
            <p>
              Qty
              <Button onClick={()=>decQ(item.id)} className="m-1 ">-</Button>{item.qty}<Button onClick={()=>incQ(item.id)} className="m-1 ">
                +
              </Button>
            </p>
          </div>

          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
      </div>
        ))}
      
    </div>
  );
};
export default Product;
