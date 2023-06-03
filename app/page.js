'use client'
import React, {useState} from "react";
import signIn from "./firebase/auth/login";
import { useRouter } from "next/navigation";
import { Button, Link, Spacer } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";



const Login = () =>{
  const [email,setEmail] = useState('')
  const [password,setPass] = useState('')
  const router = useRouter()
  const handleLogin = async (event) =>{
    event.preventDefault()
    const {result,error} = await signIn(email,password)
    if(error){
      console.log(error)
    }else{
      console.log(result)
    }
    return router.push('/home')
  }
  return(
    <Flex bg = 'gray.50' h = "100vh" display="flex" alignItems={"center"} justifyContent={"center"} m = "auto" >

      <Box w={"70vw"} boxShadow={'2xl'} padding={'2em'} rounded={'lg'} textAlign={'center'}>
      <Text fontWeight={"bold"} fontSize={'3em'}>Login</Text>
        <Box textAlign={'left'}>
          <Text>Email:</Text>
          <Input type = "email" placeholder = "Email" onChange ={(e) => {setEmail(e.target.value)}}></Input>
          <Text>Password:</Text>
          <Input type = "password" placeholder="Password" onChange = {(e) => {setPass(e.target.value)}}></Input>
        </Box>
        <Flex mt = {'10px'}>
        <Button bg={"blue.500"} color={"white"} onClick = {handleLogin}>Login</Button>
        <Spacer/>
          <Link m = {'auto'}> New Here?</Link>
        </Flex>
      </Box>

  
    

      

     

    </Flex>
  )
}
export default Login