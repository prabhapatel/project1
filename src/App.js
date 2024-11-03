

// function App() {
//   return (
//     <div className='bg-red-700 h-screen'>
//       <center>
//      <div className='bg-slate-200 w-72 border-solid border-2 border-black'>
//       <form>
//         <h1 className='font-bold' >Glassmorphism Design</h1>
//         <h6 >using tailwind css</h6>
//         <label className='font-semibold'>Name</label> <br></br>
//         <input type='text' placeholder='name' className='bg-green-200 text-center border-solid border-2 border-black '></input><br></br>
//         <br></br>
//         <label className='font-semibold' >Email</label> <br></br>
//         <input type='text' placeholder='@gmail.com' className='bg-green-200 text-center bprder-solid border-2 border-black'></input><br></br>



//         <br></br>
//         <br></br>

//         <button className='bg-red-700 w-52  text-white border-solid border-2 border-black'>send message</button>
//         <p className='text-blue-600'>on click here to revel our protected</p>
//         <p className='text-blue-600'> email address</p>
//       </form>
//      </div>
//      </center>


//     </div>
//   );
// }

// export default App;



import Navbar1 from "./Navbar1";
function App() {
  return (
    
    <div className='h-screen w-full bg-slate-300 flex gap-4'>
      <div className='h-screen w-1/4 bg-white ml-6'><h1 className="font-bold text-blue-600 ml-9">MENU</h1>
      <h1 className="font-semibold text-black ml-11 mt-4">Dashboard</h1>
      <div className="ml-14"><p>Analytics</p>
            <p>compare</p>
            <p>sales</p>
            <p>Minimal</p>
            <p>Variation</p>
            <p>Variation2</p>
            <p>CRM</p>
      </div >
      <h1 className="font-semibold text-black ml-11 mt-4">Chart</h1>
      <h1 className="font-semibold text-black ml-11 mt-1 ">Application</h1>
      <h1 className="font-bold text-blue-600 ml-9 mt-4">UI COMPONENTS</h1>
      <div className="font-semibold text-black ml-11 mt-2 ">
        <p>Elements</p>
         <p>components</p>
         <p>Tables</p>
      </div>
      <h1 className="font-bold text-blue-600 ml-9 mt-4">DASHBOARD BIDGETS</h1>
      <div className="font-semibold text-black ml-11 mt-2 ">
        <p>Chart base1</p>
        <p>Chart base2</p>
        <p>Chart base3</p>
        <p>Chart base3</p>
      </div>
      </div>
      <div className='h-screen w-3/4 bg-gray-200 mr-4'>
      <div>
      <div>
      <h className='font-semibold'>Minimal dashboard</h>
        <p>/Dashboard/ Minimal Dashboard Example</p>
        </div>
        {/* <div>
          <input type='text' placeholder="Select period" className="border-solid border-2 border-black"> </input>
        </div>
        </div> */}
    <div className='bg-blue-300 w-full'><p>This dashboard example was created using only the avilable elements and components,no additional SCSS was written </p></div>
        <div className='flex gap-x-4 mt-4'>
      <div className='bg-white w-96 h-28 shadow-red-400'><h>New Accounts</h>
      <div className="flex space-x-40 mt-11 border-b-4 border-blue-500" > <h1 className="ml-2">234%</h1> <div className="h-10 w-10 border-solid border-4 border-red-500 rounded-full text-center pb-5">75</div> </div>
      </div>
      <div className='bg-white w-96 h-28'><h>Total Expenses</h>
      <div className="flex space-x-40 mt-11 border-b-4 border-red-500"><h1 className="ml-2">71%</h1> <div className="h-10 w-10 border-solid border-4 border-blue-500 rounded-full text-center pb-5">81</div></div>
      </div>
      <div className='bg-white w-96 h-28'><h>company Value</h>
      <div className="flex space-x-40 mt-11 border-b-4 border-yellow-500"><h1 className="ml-2">$1,45M</h1> <div className="h-10 w-10 border-solid border-4 border-yellow-500 rounded-full text-center pb-5">64</div></div>
      </div>
      <div className='bg-white w-96 h-28'><h>New Employees</h>
      <div className="flex space-x-36 mt-11 border-b-4 border-pink-500"><h1  className="ml-2">+34 hires</h1> <div className="h-10 w-10 border-solid border-4 border-pink-500 rounded-full text-center pb-5">72</div></div>
      </div>
      </div>
      <div className=' flex gap-8 mt-4'>
        <div className='bg-white h-80 w-3/5 ml-4'>Traffic Sources
        <Navbar1/>
        </div>
       
        <div className='bg-white h-80 w-1/3'>Income
         <div className="h-60 w-60 bg-white border-solid border-8 border-green-500 rounded-full text-center ml-16 pb-14"><h1 className="pt-16">percent</h1>
              <h2 className='text-2xl font-bold pb-16'>75</h2>
         </div>
         <level>35%</level>
         <input type='range' className="w-96"></input>
        </div>
      </div>
      <div className='flex gap-x-4 mt-4'>
      <div className='bg-white w-96 h-28'><h>Income</h>
      <div className='flex gap-40 mt-14 border-b-4 border-red-500'><h1>$5,456</h1><h1>+14%</h1></div>
      </div>
      <div className='bg-white w-96 h-28'><h>Expenses</h>
      <div className='flex gap-40 mt-14 border-b-4 border-gray-600'><h1>4,764</h1><h1>+8%</h1></div>
      </div>
      <div className='bg-white w-96 h-28'><h>Spendings</h>
      <div className='flex gap-40 mt-14 border-b-4 border-green-600'><h1>$1.5M</h1><h1>15%</h1></div>
      </div>
      <div className='bg-white w-96 h-28 border'><h>Totals</h>
      <div className='flex gap-40 mt-14 border-b-4 border-orange-600'><h1>$31,564</h1><h1>+76%</h1></div>
      </div>
      </div>
      </div>
      </div>
      </div>
    
    
  )
}

export default App;
