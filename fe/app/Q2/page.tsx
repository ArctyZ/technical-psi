import { Button, Flex } from "antd";
import Link from "next/link";


export default  function Q2() {
    


    return (
        <Flex justify="center" align="center" style={{width: '100%', height: '100vh'}} vertical gap={5}>
            <p>We have a route '/Q2/protected' in wich you will have to login first to be able to access it.</p>
            <Link href={'http://localhost:3001/auth/google'}><Button>Login with Google</Button></Link>
        </Flex>
    )
}


