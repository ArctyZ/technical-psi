'use client'
import { Button, Col, Flex, Image, Row, Table, TableProps, Typography } from "antd";
import Search from "antd/es/input/Search";
import { getUser } from "../lib/api/checkout";
import { useEffect, useState } from "react";



export type UserType = {
    name: string;
    location: string;
    email: string;
    age: number;
    phone: string;
    cell: string;
    picture: string[];
  };

  const column: TableProps<UserType>['columns'] = [
    {
        title: 'Nama',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Umur',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Alamat',
        dataIndex: 'location',
        key: 'location'
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'No. Telepon 1',
        dataIndex: 'phone',
        key: 'phone'
    },
    {
        title: 'No. Telepon 2',
        dataIndex: 'cell',
        key: 'cell'
    },
    {
        title: 'Gambar',
        dataIndex:'picture',
        key: 'picture',
        render: (_, {picture}) => {
            return <Image src={picture[2]} alt="Thumbnail"/>
        }
    }
  ]

export default function Q4() {
    const [users, setUsers] = useState<UserType[]>()
    const [defaultUsers, setDefaultUsers] = useState<UserType[]>()
    const [search, setSearch] = useState<string>('')

    const handleSearch = (query: string) => {
        if(query === '' || query === null) {
            setUsers(defaultUsers)
            return
        }
        const result = defaultUsers?.filter((user:UserType) => {
            return user.name.toLocaleLowerCase().includes(query.toLowerCase())
        })
        setUsers(result)
    }

    useEffect(() => {
        getUser(10, 1).then((res) => {
            setUsers(res)
            setDefaultUsers(res)
        })
    },[])

    


  return (
    <Flex vertical gap={10}>
        <Typography style={{fontSize:'16px', fontWeight:700}}>List</Typography>
        <Row justify={"space-between"}>
            <Col span={12}>
                <Search placeholder="Search" onChange={(e) => setSearch(e.target.value)} onSearch={() => handleSearch(search)}/>
            </Col>
            <Col span={6}>
                <Button>+ New Data</Button>
            </Col>
        </Row>
        <Table dataSource={users} columns={column}/>
    </Flex>
  );
}
