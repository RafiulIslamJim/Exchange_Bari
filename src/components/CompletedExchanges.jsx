const CompletedExchanges = () => {
  const exchanges = [
    { send: "B পাসারেলা BDT", received: "RedotPay USDT USD", amount: "128 BDT", username: "Miraj15", time: "17/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "RedotPay USDT USD", amount: "150 BDT", username: "Tanoy", time: "17/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "RedotPay USDT USD", amount: "128 BDT", username: "Tanvir431", time: "16/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "RedotPay USDT USD", amount: "2000 BDT", username: "Voidisr6666", time: "15/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "Perfect Money USD", amount: "123 BDT", username: "Anwarsheikh", time: "14/07/2024", status: "Accepted" },
    { send: "N পাসারেলা BDT", received: "RedotPay USDT USD", amount: "260 BDT", username: "Suhagbd24info", time: "14/07/2024", status: "Accepted" },
    { send: "N পাসারেলা BDT", received: "RedotPay USDT USD", amount: "300 BDT", username: "Suhagbd24info", time: "14/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "RedotPay USDT USD", amount: "128 BDT", username: "Suhagbd24info", time: "13/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "RedotPay USDT USD", amount: "135 BDT", username: "Tanoy", time: "12/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "RedotPay USDT USD", amount: "180 BDT", username: "Shoumikrahman", time: "11/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "WebMoney USD", amount: "618 BDT", username: "Deepok", time: "10/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "RedotPay USDT USD", amount: "150 BDT", username: "Tanoy", time: "08/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "Payeer USD", amount: "123 BDT", username: "Mourshad123", time: "07/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "WebMoney USD", amount: "2060 BDT", username: "Deepok", time: "06/07/2024", status: "Accepted" },
    { send: "B পাসারেলা BDT", received: "PayPal USD", amount: "1404 BDT", username: "NazmulHaq", time: "06/07/2024", status: "Accepted" },
  ];

  return (
    <div className="bg-gray-100 pb-5 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-full max-w-6xl">
        <h2 className="text-xl text-black font-medium mb-4">Completed Exchanges</h2>
        
        {/* Responsive table wrapper */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-green-500 text-white">
                <th className="py-2 px-1 sm:px-4 border">Send</th>
                <th className="py-2 px-1 sm:px-4 border">Received</th>
                <th className="py-2 px-1 sm:px-4 border">Amount</th>
                <th className="py-2 px-1 sm:px-4 border">Username</th>
                <th className="py-2 px-1 sm:px-4 border">Time</th>
                <th className="py-2 px-1 sm:px-4 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {exchanges.map((exchange, index) => (
                <tr key={index} className="text-center text-gray-500">
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">{exchange.send}</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">{exchange.received}</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">{exchange.amount}</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">{exchange.username}</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border">{exchange.time}</td>
                  <td className="py-1 sm:py-2 px-1 sm:px-4 border text-green-500 font-bold">
                    {exchange.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompletedExchanges;
