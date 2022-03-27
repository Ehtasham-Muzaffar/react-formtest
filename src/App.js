import React, { useState } from 'react';

const App = ()=>{
  const [fullname,setfullname] = useState({
    fname:'',
    lname:'',
    phone:''
  })
  const textchange= (e)=>{
    console.log(e.target.value)
    console.log(e.target.name)
    const {name,value} = e.target
setfullname((oldpreview)=>{
  console.log(oldpreview)
return {
...oldpreview,
[name]:value
}
})
  }
return(
  <>
<form action="">
  <input type="text" name='fname' onChange={textchange} />
  <input type="text" name='lname' onChange={textchange} />
  <input type="text" name='phone' onChange={textchange} />
  <h1>
    {fullname.fname}
  </h1>
  <h1>
    {fullname.lname}
  </h1>
  <h1>
    {fullname.phone}
  </h1>
</form>
</>
)
}
export default App;