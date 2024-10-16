import { useState } from 'react';

const ExchangeHero = () => {
  const [sendAmount, setSendAmount] = useState(1);
  const [receiveAmount, setReceiveAmount] = useState(117);

  const handleExchange = () => {
    // Logic for handling the exchange can be added here
    alert(`Exchanging ${sendAmount} USD to ${receiveAmount} BDT`);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-700">
      <div className="container max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        {/* Exchange Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* You Send Section */}
          <div>
            <h2 className="text-yellow-400 text-lg font-bold mb-4 text-center md:text-left">You Send</h2>
            <div className="flex items-center space-x-4">
              {/* Dropdown */}
              <select className="bg-gray-100 p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400">
                <option>Payeer - USD</option>
                <option>Other - USD</option>
              </select>
            </div>
            <div className="mt-4">
              {/* Input field for amount */}
              <input
                type="number"
                value={sendAmount}
                onChange={(e) => setSendAmount(Number(e.target.value))}
                className="bg-gray-100 p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center md:text-left">Exchange rate: 1 USD = 117 BDT</p>
          </div>

          {/* You Receive Section */}
          <div>
            <h2 className="text-yellow-400 text-lg font-bold mb-4 text-center md:text-left">You Receive</h2>
            <div className="flex items-center space-x-4">
              {/* Dropdown */}
              <select className="bg-gray-100 p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400">
                <option>B পার্সোনাল BDT</option>
                <option>Other - BDT</option>
              </select>
            </div>
            <div className="mt-4">
              {/* Input field for amount */}
              <input
                type="number"
                value={receiveAmount}
                onChange={(e) => setReceiveAmount(Number(e.target.value))}
                className="bg-gray-100 p-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-yellow-400"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center md:text-left">Reserve: 50 BDT</p>
          </div>
        </div>

        {/* Exchange Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleExchange}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-md transition duration-300 focus:outline-none focus:ring-4 focus:ring-green-400"
          >
            Exchange
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExchangeHero;
