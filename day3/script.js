function add(a,b){
    return a+b
}
const mul=(a,b)=>{
    return a*b
}
console.log(mul(12,11));
 
 

  const numbers=[1,3,4,88,21,-35,-26]
  const mappednum=numbers.map((num)=>num*3)
  console.log(mappednum);

//filter-return
  const posNum=numbers.filter((num)=>num>0)
  console.log(posNum);

  //odd number
  const oddNum=numbers.filter((num)=>num%2!=0)
  console.log(oddNum);

  //reduce -reduced to single( element
  const total=numbers.reduce((sum,n)=>sum+n,0)
  console.log(total);

  const products=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'lap',price:7500},
    {name:'game',price:2500},
    {name:'ac',price:7300},
    {name:'remote',price:8000}
  ]
    const totalPrice=products.reduce((sum,n)=>sum+n.price,0)
    console.log(totalPrice);

    //destruction
    const user={name:'CR7',password:'12345678'}
    const {name,password}=user
    console.log(password);

    //spread
    const arr1=[1,2,3]
    const arr2=[4,5,6]
    const copy=[...arr2,...arr1]
    console.log(copy);

    //rest
    function add2(...arguments){
        return arguments;
    }
    console.log(add2(1,2,3,4,5))

    function function1(){
        console.log('from inside callback')
    }
    function fun(name,callback){
        callback()
        return '${name} from outside callback'
    }
    console.log(fun('function',()=>{console.log('from inside callback')}));
    async function fetchUsers(){
    try{
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'

        )
        const data=await response.json()
       // console.log(data);
       data.map((a)=>console.log(a.name))

    }catch(error) {
        console.log(error);
    }
    }
    fetchUsers()