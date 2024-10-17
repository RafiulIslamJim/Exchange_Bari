

const ExchangeDashboard = () => {
  return (
    <div className="bg-gray-100 pt-14 pb-10 flex justify-center items-center">
      <div className="bg-white rounded-lg w-full max-w-6xl">
          <div className="bg-red-100 border border-green-700 text-red-700 px-4 py-3 rounded relative " role="alert">
            <h1>Latest Update</h1>
            <p><span>DateL</span>08-09-2024- 12:52 AM</p>
            <h1>Regarding Site Re-Start</h1>
            <p>আমাদের সার্ভিস ভালো লাগলে একটি রিভিউ দিবেন 🙂</p>
           </div>
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <h1>We Processing Exchange</h1>
            </div>
            <div className="lg:col-span-3">
              <h1>Completed Exchange</h1>
            </div>
            <div className="lg:col-span-3">
              <h1>Refund Exchange</h1>
            </div>
            <div className="lg:col-span-3">
              <h1>Recent Users Review</h1>
            </div>
            <div>
              <h1>Track Exchange</h1>
            </div>
            <div>
              <h1>Today Buy Sell Rate</h1>
            </div>
            <div>
              <h1>Our Reserve</h1>
            </div>
           </div>
      </div>
      
    </div>
  )
}

export default ExchangeDashboard
