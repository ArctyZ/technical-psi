/* eslint-disable react/no-unescaped-entities */
'use client'
import { Flex, Typography } from "antd";
import { checkout } from "../lib/api/checkout";
import { useState } from "react";

export default function Q1() {
  const [result, setResult] = useState(null);

  const handleCheckout = async () => {
    const data = await checkout(5000000, 50)
    setResult(data)
  }

  return (
    <Flex vertical gap={10}>
      <Typography>Harga: 5.000.000</Typography>
      <Typography>Voucher: 50%</Typography>

      <button onClick={() => handleCheckout()}>Click to checkout</button>
      
      {result ?  (
        <>
          <Typography>Total: {result.result}</Typography>
          <Typography>Selamat anda mendapatkan point sebesar: {result.point}</Typography>
        </>
      ) : ''}
    </Flex>
  );
}
