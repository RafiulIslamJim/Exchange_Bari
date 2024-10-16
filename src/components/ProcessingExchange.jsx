const ProcessingExchange = () => {
  return (
    <div className="overflow-x-auto">
      <h1 className="font-bold">We Processing Exchange</h1>
    <table className="min-w-full border-collapse border">
      <thead>
        <tr className="bg-green-500 text-white">
          <th className="p-2 text-left">Send</th>
          <th className="p-2 text-left">Received</th>
          <th className="p-2 text-left">Amount</th>
          <th className="p-2 text-left">Username</th>
          <th className="p-2 text-left">Time</th>
          <th className="p-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white">
          <td className="p-2 border">B পাসোনাল BDT</td>
          <td className="p-2 border">RedotPay USDT USD</td>
          <td className="p-2 border">100 BDT</td>
          <td className="p-2 border">Sudebkumar</td>
          <td className="p-2 border">03/10/2024</td>
          <td className="p-2 border">
            <span className="bg-blue-200 text-blue-600 px-2 py-1 rounded">Processing</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default ProcessingExchange
