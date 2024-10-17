import CompletedExchanges from './CompletedExchanges'
import Hero from './Hero'
import LatestUpdate from './LatestUpdate'
// import LatestUpdate from './LatestUpdate'
import Processing from './Processing'
import RefundedExchange from './RefundedExchange'
import RecentUsersReview from "./RecentUsersReview";

const reserves = [
  { icon: '/path-to-icon/adv-cash-icon.png', name: 'Adv Cash USD', amount: '0.40 USD' },
  { icon: '/path-to-icon/perfect-money-icon.png', name: 'Perfect Money USD', amount: '0.5 USD' },
  { icon: '/path-to-icon/ethereum-icon.png', name: 'Ethereum USD', amount: '0.43 USD' },
  { icon: '/path-to-icon/binance-usdt-icon.png', name: 'Binance USDT USD', amount: '0.3 USD' },
  { icon: '/path-to-icon/payeer-icon.png', name: 'Payeer USD', amount: '0.5 USD' },
  { icon: '/path-to-icon/paypal-icon.png', name: 'PayPal USD', amount: '0 USD' },
  { icon: '/path-to-icon/bd-bdt-icon.png', name: 'B পার্সোনাল BDT', amount: '50 BDT' },
  { icon: '/path-to-icon/another-bd-icon.png', name: 'N পার্সোনাল BDT', amount: '10 BDT' },
  { icon: '/path-to-icon/webmoney-icon.png', name: 'WebMoney USD', amount: '0 USD' },
  { icon: '/path-to-icon/redotpay-usdt-icon.png', name: 'RedotPay USDT USD', amount: '0.83 USD' },
  { icon: '/path-to-icon/pm-manual-icon.png', name: 'PM Manual USD', amount: '0.50 USD' },
  { icon: '/path-to-icon/fiverr-icon.png', name: 'Fiverr - PayPal USD', amount: '0 USD' },
];

const Exchange = () => {
  return (
   <div className='bg-gray-100'>
    <Hero/>
    <LatestUpdate/>
    <div className="flex items-center justify-center bg-gray-100 p-10 lg:py-16">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-2">
          <Processing/>
          <CompletedExchanges/>
          <RefundedExchange/>
          <RecentUsersReview/>
        </div>               
        <div className="space-y-7">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl text-center text-black font-semibold mb-4">Track Exchange</h2>
            <input type="text" className="w-full border border-gray-300 rounded p-2 mb-4" placeholder="Type here exchange ID" />
            <button className="w-full bg-green-500 text-white font-semibold py-2 rounded hover:bg-green-600">
              Track
            </button>
          </div>
         <div className="bg-white  rounded-lg p-4 border-2 ">
  <h2 className="text-xl text-center text-black font-semibold mb-4">Today Buy Sell Rate</h2>
  <table className="min-w-full text-center bg-white ">
    <thead>
      <tr className="bg-green-500 text-white">
        <th className="py-2 px-4 border">Accept</th>
        <th className="py-2 px-4 border">We Buy</th>
        <th className="py-2 px-4 border">We Sell</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-gray-600">
        <td className="py-2 px-4 border text-black">Adv Cash</td>
        <td className="py-2 px-4 border text-red-500">105 BDT</td>
        <td className="py-2 px-4 border text-green-600">110 BDT</td>
      </tr>
      <tr className="text-gray-600">
        <td className="py-2 px-4 border text-black">Adv Cash</td>
        <td className="py-2 px-4 border text-red-500">105 BDT</td>
        <td className="py-2 px-4 border text-green-600">110 BDT</td>
      </tr>
      <tr className="text-gray-600">
        <td className="py-2 px-4 border text-black">Adv Cash</td>
        <td className="py-2 px-4 border text-red-500">105 BDT</td>
        <td className="py-2 px-4 border text-green-600">110 BDT</td>
      </tr>
      <tr className="text-gray-600">
        <td className="py-2 px-4 border text-black">Adv Cash</td>
        <td className="py-2 px-4 border text-red-500">105 BDT</td>
        <td className="py-2 px-4 border text-green-600">110 BDT</td>
      </tr>
      <tr className="text-gray-600">
        <td className="py-2 px-4 border text-black">Adv Cash</td>
        <td className="py-2 px-4 border text-red-500">105 BDT</td>
        <td className="py-2 px-4 border text-green-600">110 BDT</td>
      </tr>
      <tr className="text-gray-600">
        <td className="py-2 px-4 border text-black">Adv Cash</td>
        <td className="py-2 px-4 border text-red-500">105 BDT</td>
        <td className="py-2 px-4 border text-green-600">110 BDT</td>
      </tr>
      <tr className="text-gray-600">
        <td className="py-2 px-4 border text-black">Adv Cash</td>
        <td className="py-2 px-4 border text-red-500">105 BDT</td>
        <td className="py-2 px-4 border text-green-600">110 BDT</td>
      </tr>
      <tr className="text-gray-600">
        <td className="py-2 px-4 border text-black">Adv Cash</td>
        <td className="py-2 px-4 border text-red-500">105 BDT</td>
        <td className="py-2 px-4 border text-green-600">110 BDT</td>
      </tr>
      <tr className="text-gray-600">
        <td className="py-2 px-4 border text-black">Adv Cash</td>
        <td className="py-2 px-4 border text-red-500">105 BDT</td>
        <td className="py-2 px-4 border text-green-600">110 BDT</td>
      </tr>
    </tbody>
  </table>
</div>

          <div className="bg-white p-6 shadow rounded-lg">
      <h1 className="text-xl font-semibold mb-4 text-center">Our Reserve</h1>
      <ul className="space-y-4">
        {reserves.map((reserve, index) => (
          <li key={index} className="flex items-center">
            <div className="flex justify-between  w-full">
              <span className='font-bold text-gray-500'>{reserve.name}</span>
              <span className="font-medium">{reserve.amount}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
        </div>
      </div>
  </div>
   </div>
  
  )
}

export default Exchange
