/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Cart = ({selectedLanguage, remaining, totalHour}) => {
    
 let count
    return (
        <div>
                <div>
                <h2 className="text-2xl font-bold text-[#2F80ED]">Credit Hour Remaining {remaining} hr</h2>
                <div className="ml-11 w-80 border-b-2 mt-2 border-gray-400"></div>
                    <h2 className="text-2xl font-bold">Course Name</h2>
                   
                   {
                        selectedLanguage.map((select, count) => {
                          return <p key={select.id}>{count + 1}. {select.name}</p>
                        })
                    }
                   
                </div>
                <br />
                
                <div className=" ml-11 w-80 border-b-2 mt-2 border-gray-400"></div>

                <h2 className="text-2xl font-semibold">Total Credit Hour : {totalHour}</h2> 
        </div>
    );
};

export default Cart;