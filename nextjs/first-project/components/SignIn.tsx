"use client"
export default function SignIn() {
    return (
        <div className="rounded-lg border border-gray-300 flex flex-col justify-start items-center gap-4 p-6 hover:bg-gray-100">
        <span className="text-4xl font-semibold">Sign in</span>
        <div>
           <LabelledInput label="Username" placeholder="rajendra@gmail.com" type="text" />
           <LabelledInput label="Password" placeholder="Password" type="password" />
        </div>
        <button className="px-4 py-2 w-full rounded-lg bg-slate-900 text-lg font-semibold text-white" onClick={()=> {
            console.log("CLicked")
        }}>Sign In</button>
      </div>
    )
}


interface labelledInputType {
    label: string;
    placeholder: string;
    type: string;
  }
  
  function LabelledInput({ label, placeholder, type }: labelledInputType) {
    return (
      <div className="py-2 flex flex-col justify-start gap-2">
        <label className="text-xl font-medium">{label}</label>
        <input type={type || "text"} placeholder={placeholder} className="p-2 text-base border-2 border-gray-300 rounded-lg"/>

      </div>
    );
  }
  