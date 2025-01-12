import React from "react";

const Button = (props) => {
  const {children, variant = "bg-black"} = props;
  return (
    <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
      {props.children}    
    </button>
    
  );
}

function App() {
  return (<div className='flex justify-center bg-blue-200 min-h-screen items-center'>
    <div className="flex gap-x-3">
      <Button variant="bg-red-600">Login</Button>
      <Button variant="bg-slate-600">Logout</Button>
      <Button>Register</Button>
    </div>
  </div>
  );
}

export default App
