
const Affiliate = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-10 ">
    <div className="bg-white rounded-lg p-6 w-full max-w-6xl">
      <h2 className="text-2xl font-semibold text-gray-500 border-b pb-4 pt-4 mb-4">Affiliate Program</h2>
      <p className="text-gray-600 mb-4">
        Any registered user of Dollar Buy Sell BD - Exchange Bari <span className="text-sm">এক্সচেঞ্জ বাড়ি </span> 
        can use our Affiliate Program. Through it, you can earn up to 2% of all exchanges made through your link. 
        All your winnings can be withdrawn at any time you wish. Term of payment of profits is from 1 to 5 working days.
      </p>

      <h3 className="text-lg font-medium text-gray-500 mb-2">How it works?</h3>
      <p className="text-gray-600 mb-4">
        When a user enters through your link, we automatically remember your ID number in our system. 
        If the user has requested to exchange, pay its part, and we successfully complete the exchange, 
        you get your profit by 2% of the difference between the two amounts. 
        Example: If the user decides to exchange 100 dollars and our exchange rate is 1 = 0.95, 
        users receive 95 dollars and you take 2% of 5.
      </p>

      <h3 className="text-lg font-medium text-gray-500 mb-2">How to use Affiliate Program:</h3>
      <ol className="list-decimal list-inside text-gray-600 space-y-2">
        <li>Login with your account</li>
        <li>Go to tab Referrals</li>
        <li>Copy link and share it with your friends, social networks, or other places and wait to get your profits</li>
      </ol>
    </div>
  </div>
  )
}

export default Affiliate
