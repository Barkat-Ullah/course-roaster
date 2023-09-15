/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import swal from 'sweetalert';
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {
    const [languages, setLanguages] = useState([])
    const [selectedLanguage, setSelectedLanguage] = useState([])
    const [remaining, setRemaining] = useState(0)
    const [totalHour, setTotalHour] = useState(0)
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setLanguages(data))
    } ,[])

   
    const handleSelect = (language) => {
      
        const isExisted = selectedLanguage.find((fixed) => fixed.id === language.id);
        let hour = language.time
        if(isExisted){
            swal('Already Existed')
        }
        else{
            selectedLanguage.forEach((item) => {
                hour = hour + item.time
            })
            
            const totalRemaining = 20 - hour;
           
        if (hour > 20) {
            swal('You do not have more hours.')
        }    
         else{
            setTotalHour(hour)
            setRemaining(totalRemaining);
            setSelectedLanguage([...selectedLanguage, language])
         }   
        }
    }
   
    return (  
       
        <div className="max-w-7xl mx-auto flex justify-between gap-3 mt-5">
            <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               
            {
                languages.map((language) => (
                    <div key={language.id} className="card bg-base-200 rounded shadow-xl">
                    <figure><img src={language.image} alt="Shoes" /></figure>
                     <div className="card-body my-4">
                         <h2 className="card-title text-center text-[18px] font-semibold">{language.name}</h2>
                           <p className="text-center text-slate-600">{language.description}</p>
                            <div className="flex justify-around">
                                <span className="mt-2">$ <small className="font-medium text-[18px]">Price : {language.price}</small></span>
                                <div className="flex gap-2 mt-2"> 
                                   <button>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 6.04201C10.3516 4.56337 8.2144 3.74695 6 3.75001C4.948 3.75001 3.938 3.93001 3 4.26201V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.04201C13.6483 4.56328 15.7856 3.74686 18 3.75001C19.052 3.75001 20.062 3.93001 21 4.26201V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.997 13.6484 18.8134 12 20.292M12 6.04201V20.292" stroke="#1C1B1B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                   </button>
                                    <p>Credit : {language.time} hr</p>
                                </div>
                            </div>
                        <div className="text-center mt-2">
                          <button onClick={() => handleSelect(language)} className="font-semibold bg-[#2F80ED] hover:bg-sky-500 px-24 py-2 rounded text-yellow-50">Select</button>
                       </div>
                    </div>
                  </div>
                ))
            }

            </div>
           <div className="w-1/3 text-center rounded">
           <Cart selectedLanguage = {selectedLanguage} remaining = {remaining} totalHour = {totalHour}></Cart>
         </div>
        </div>
    );
};

export default Home;