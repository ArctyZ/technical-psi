'use client'
import { Menu, MenuProps } from "antd";
import Link from "next/link";
import { useState } from "react";


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: <Link href={'/Q1'}>Q1</Link>,
        key: 'Q1',
    },
    {
        label: <Link href={'/Q2'}>Q2</Link>,
        key: 'Q2',
    },
    {
        label: <Link href={'/Q3'}>Q3</Link>,
        key: 'Q3',
    },
    {
        label: <Link href={'/Q4'}>Q4</Link>,
        key: 'Q4',
    },
    {
        label: <Link href={'/Q5'}>Q5</Link>,
        key: 'Q5',
    },
]


export default function Navbar() {
    const [current, setCurrent] = useState('');

    const onClick: MenuProps['onClick'] = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}
