export   const productos = [
    {
     id  :1, 
     nombre: 'Air Jordan 1',
     precio: 300,
     imagen:'./imags/airjordan.jpg'
    },
    {
      id  :2,
    nombre: 'Lebron 13',
     precio: 250,
     imagen:'./imags/lebron17.jpg'
    },
    {
      id  :3,
     nombre: 'Kyrie Irving 6',
     precio: 150,
     imagen:'./imags/kyrie6.jpg'
     },
    {
      id  :4,
     nombre: 'Air Jordan 4',
     precio: 300,
     imagen:'./imags/airjordan4.jpg'
     },
     {
    id  :5,
     nombre: 'Air Jordan 11',
     precio: 280,
     imagen:'./imags/airjordan11.jpg'
     },
     {
      id  :6,
     nombre: 'KD 13',
     precio: 130,
     imagen:'./imags/kd13.jpg'
     },
     {
      id  :7,
     nombre: 'Curry Flow 9',
     precio: 200,
     imagen:'./imags/curryflow9.jpg'
     },
     {
      id :8,
     nombre: 'Lebron8',
     precio: "200",
     imagen:"./imags/lebron8.jpg"
     },
     {
      id  :9,
     nombre: 'Kyrie 7',
     precio: 115,
     imagen:'./imags/kyrie7.jpg'
     },
    {
    id  :10,
      nombre: 'Yeezy',
      precio: 250,
      imagen:'./imags/yeezyvoost350.jpg'
       }
   ];
export const traeProductos= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(pelis)
    }, 4000);
})