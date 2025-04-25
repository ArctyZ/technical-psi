"use client";
import { Button, Flex, Input, Typography } from "antd";
import { useEffect, useState } from "react";

export default function Q5() {
  const [color, setColor] = useState<string>("")
  const [result, setResult] = useState<string[]>()
  const [arrColor, setArrColor] = useState<string[]>([
    "merah",
    "kuning",
    "hijau",
    "pink",
    "ungu",
    'maroon',
  ])

  const items = ["baju", "celana", "topi", "jaket", "sepatu"]
  const status = ["diskon", "sale", "diskon", "sale", "sale"]

  const getResult = () =>{
    setResult(arrColor.map((color, i) => {
      if(i % items.length === 0) return `${items[0]} ${color} ${status[0]}`
  
      if((i % items.length) % 2 === 0) return `${items[i % items.length]} ${arrColor[i - 1]} ${status[i % items.length]}`
  
      return `${items[i % items.length]} ${arrColor[i + 1]} ${status[i % items.length]}`
    }))
  } 

  useEffect(() => {
    getResult()
  }, [arrColor])

  return (
    <Flex vertical gap={10}>
      <Flex gap={10} vertical>
        <Typography>Tambahkan minimal 2 warna, agar pattern bisa terjaga</Typography>
        <Input placeholder="Tambahkan Warna" onChange={(e) => setColor(e.target.value)}/>
        <Button onClick={() => setArrColor([...arrColor, color])}>+Add</Button>
      </Flex>
      <Typography>Warna: [{arrColor.map((col => `${col} `))}]</Typography>
      <Typography>Barang: [{items.map((item => `${item} `))}]</Typography>
      <Typography>Status: [{status.map(status => `${status} `)}]</Typography>

      <Typography>Hasil: [{result?.map((res => `${res}, `))}]</Typography>
    </Flex>
  );
}
