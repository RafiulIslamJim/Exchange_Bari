const Processing = () => {
  return (
    <div className="bg-gray-100 pb-5 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-6xl">
        <h2 className="text-xl text-black font-medium mb-4">We Processing Exchange</h2>
        
        {/* Wrapper for responsive table with overflow */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="py-2 px-4 border"><span></span>Send</th>
                <th className="py-2 px-4 border"><span></span>Received</th>
                <th className="py-2 px-4 border"><span></span>Amount</th>
                <th className="py-2 px-4 border"><span></span>Username</th>
                <th className="py-2 px-4 border"><span></span>Time</th>
                <th className="py-2 px-4 border"><span></span>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center text-gray-500">
                <td className="py-2 px-4 border">B পার্সোনাল BDT</td>
                <td className="py-2 px-4 border">RedotPay USDT USD</td>
                <td className="py-2 px-4 border">100 BDT</td>
                <td className="py-2 px-4 border">sudebkumar</td>
                <td className="py-2 px-4 border">03/10/2024</td>
                <td className="py-2 px-4 border text-blue-400 font-bold">Processing</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Processing;