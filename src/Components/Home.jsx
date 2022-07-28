import React from 'react'
import { useEffect,useState } from 'react';
import 'cross-fetch/polyfill';
// import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import axios from "axios";

export default function Home() {

useEffect(()=>{


  // const options = {
  //   method: 'GET',
  //   url: 'api.openweathermap.org/data/2.5/weather&APPID=59155888c3bda7b4738ddfe063d9cefe',
  //   // params: {q: 'London', dt: '2022-12-25'},
  //   // headers: {
  //   //   'X-RapidAPI-Key': '12a5c597f0mshef4dce693e11c4cp1e2758jsn35b028634170',
  //   //   'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  //   // }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  // const options = {
  //   method: 'GET',
  //   url: 'https://weatherapi-com.p.rapidapi.com/future.json',
  //   params: {q: 'London', dt: '2022-12-25'},
  //   headers: {
  //     'X-RapidAPI-Key': '12a5c597f0mshef4dce693e11c4cp1e2758jsn35b028634170',
  //     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  //   }
  // };
  
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });

axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=59155888c3bda7b4738ddfe063d9cefe')

 .then((response) => {
   console.log(response)
  // setPost(response.data);
});
// axios.get('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=59155888c3bda7b4738ddfe063d9cefe')

//  .then((response) => {
//    console.log(response)
//   // setPost(response.data);
// });

},[]);



  return (
    <>
   {/* <div className="container bg-primary">
     this is the home
   </div> */}

   <div className="row">
     <div className="col-8  bg-primary">
       This is home
     </div>
   </div>
    </>
  )
}
