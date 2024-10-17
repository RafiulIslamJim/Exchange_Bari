const RefundedExchange = () => {
  return (
    <div className="bg-gray-100 pt-5 pb-5 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-6xl">
        <h2 className="text-xl text-black font-medium mb-4">Refunded Exchange</h2>
        
        {/* Responsive table wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="py-2 px-1 sm:px-4 border">Send</th>
                <th className="py-2 px-1 sm:px-4 border">Received</th>
                <th className="py-2 px-1 sm:px-4 border">Amount</th>
                <th className="py-2 px-1 sm:px-4 border">Username</th>
                <th className="py-2 px-1 sm:px-4 border">Date</th>
                <th className="py-2 px-1 sm:px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {Array(5).fill().map((_, index) => (
                <tr key={index} className="text-center text-gray-500">
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">B পার্সোনাল BDT</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">RedotPay USDT USD</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">100 BDT</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">sudebkumar</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">03/10/2024</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border text-red-500 font-bold">Refunded</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RefundedExchange;
