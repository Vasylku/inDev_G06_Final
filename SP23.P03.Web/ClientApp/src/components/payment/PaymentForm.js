 import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { ImPaypal } from 'react-icons/im';

const PaymentForm = () => {
  const [selectedPaymentType, setSelectedPaymentType] = useState('credit_card');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission based on selectedPaymentType
    console.log('Form submitted for:', selectedPaymentType);
  };

  return (
    <div className="min-w-screen min-h-screen bg-gray-700 flex items-center justify-center px-5 pb-10 pt-16">
      <div className="w-96 mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700 max-w-2xl " style={{ maxWidth: "600px" }}>
        <div className="mb-10">
          <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label htmlFor="type1" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-yellow-500"
                name="type"
                id="type1"
                value="credit_card"
                checked={selectedPaymentType === 'credit_card'}
                onChange={(e) => setSelectedPaymentType(e.target.value)}
              />
              <FaCcVisa className="h-8 ml-3" />
            </label>
          </div>
          <div className="px-2">
            <label htmlFor="type2" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-yellow-500"
                name="type"
                id="type2"
                value="paypal"
                checked={selectedPaymentType === 'paypal'}
                onChange={(e) => setSelectedPaymentType(e.target.value)}
              />
              <ImPaypal className="h-8 ml-3" />
            </label>
          </div>
        </div>

        {selectedPaymentType === 'credit_card' && (
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardName">Name on card</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-500 transition-colors" placeholder="John Smith" type="text" id="cardName" />
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardNumber">Card number</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-800 transition-colors" placeholder="0000 0000 0000 0000" type="text" id="cardNumber" />
            </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardExpirationDate">Expiration date</label>
                <div>
                    <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" id="cardExpirationDate">
                        <option value="01">01 - January</option>
                        <option value="02">02 - February</option>
                        <option value="03">03 - March</option>
                        <option value="04">04 - April</option>
                        <option value="05">05 - May</option>
                        <option value="06">06 - June</option>
                        <option value="07">07 - July</option>
                        <option value="08">08 - August</option>
                        <option value="09">09 - September</option>
                        <option value="10">10 - October</option>
                        <option value="11">11 - November</option>
                        <option value="12">12 - December</option>
                    </select>
                </div>
                <div className="mb-10">
                    <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                    <div>
                        <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-800 transition-colors" placeholder="000" type="text"/>
                    </div>
                </div>

            </div>

        </div>
        <div>
            <button
                className="block w-full max-w-xs mx-auto bg-yellow-800 hover:bg-yellow-500 focus:bg-yellow-700 text-white rounded-lg px-3 py-3 font-semibold ">
                <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
            </button>
        </div></form>
        )}
           {selectedPaymentType === 'paypal' && (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="font-bold text-sm mb-2 ml-1" htmlFor="paypalEmail">PayPal email address</label>
        <div>
          <input
            className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-500 transition-colors"
            placeholder="you@example.com"
            type="email"
            id="paypalEmail"
          />
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  )}
</div>
</div>



);
};

export default PaymentForm;
/* import React from 'react';


const PaymentForm = () => {

    return (

        
            <div className="w-96 mx-auto rounded-lg white-glassmorphism shadow-lg p-5 text-gray-700 max-w-2xl " style={{ maxWidth: "600px" }}>
                <div className="mb-10">
                    <h1 className=" text-center font-bold text-xl uppercase">Secure payment info</h1>
                </div>
                <div className="mb-3 flex -mx-2">
                    <div className="px-2">
                        <label htmlFor="type1" className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-5 w-5 text-yellow-500" name="type" id="type1" defaultChecked />
                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" alt="Credit Card Type 1" />
                        </label>
                    </div>
                    <div className="px-2">
                        <label htmlFor="type2" className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-5 w-5 text-yellow-500" name="type" id="type2" />
                            <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" alt="Credit Card Type 2" />
                        </label>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardName">Name on card</label>
                    <div>
                        <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-500 transition-colors" placeholder="John Smith" type="text" id="cardName" />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardNumber">Card number</label>
                    <div>
                        <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-800 transition-colors" placeholder="0000 0000 0000 0000" type="text" id="cardNumber" />
                    </div>
                </div>
                <div className="mb-3 -mx-2 flex items-end">
                    <div className="px-2 w-1/2">
                        <label className="font-bold text-sm mb-2 ml-1" htmlFor="cardExpirationDate">Expiration date</label>
                        <div>
                            <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer" id="cardExpirationDate">
                                <option value="01">01 - January</option>
                                <option value="02">02 - February</option>
                                <option value="03">03 - March</option>
                                <option value="04">04 - April</option>
                                <option value="05">05 - May</option>
                                <option value="06">06 - June</option>
                                <option value="07">07 - July</option>
                                <option value="08">08 - August</option>
                                <option value="09">09 - September</option>
                                <option value="10">10 - October</option>
                                <option value="11">11 - November</option>
                                <option value="12">12 - December</option>
                            </select>
                        </div>
                        <div className="mb-10">
                            <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                            <div>
                                <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-yellow-800 transition-colors" placeholder="000" type="text"/>
                            </div>
                        </div>

                    </div>

                </div>
                <div>
                    <button
                        className="block w-full max-w-xs mx-auto bg-yellow-800 hover:bg-yellow-500 focus:bg-yellow-700 text-white rounded-lg px-3 py-3 font-semibold ">
                        <i className="mdi mdi-lock-outline mr-1"></i> PAY NOW
                    </button>
                </div>
            </div>
  
                )}
                export default PaymentForm */