import "./ScrollingText.css"; 

const ScrollingText = () => {
  return (
    <div className="relative">
  <h1 className="bg-[rgb(0,195,95)] text-white  px-2 py-1 absolute top-0 hidden md:inline-block">
    Work time: ২৪ ঘণ্টা খোলা--(BD)
  </h1>

  <div className="bg-[#010d6e] text-white overflow-hidden whitespace-nowrap w-full py-1">
    <div className="scrolling-text inline-block">
      <span className="text-yellow-400 text-sm font-bold"> Notice:</span> 
      <span className="text-sm">Exchangebari.com</span> 
      <span className="text-sm">
        এ আপনাকে স্বাগতম। আমাদের ওয়েবসাইট শুধুমাত্র দেশের ফ্রীলান্সারদের জন্য তৈরি করা হয়েছে। আমরা রাষ্ট্রীয় মানিলন্ডারিং প্রতিরোধ আইন ২০১২ এর প্রতি শ্রদ্ধাশীল। 
        আমরা কোনো প্রকার অবৈধ লেনদেন সমর্থন করিনা। সর্বনিম্ন একচেঞ্জে ১ ডলার বা ১০০ টাকা। আপনি আমাদের ওয়েবসাইটে নতুন হলে লেনদেন করার পূর্বে নিচ থেকে 
        আমাদের Terms of Services দেখুন। যে কোনো এক্সচেঞ্জ রিকোয়েস্ট দিয়ে ৫ থেকে ১০ মিনিট অপেক্ষা করুন। ডলারের আপডেট দাম এবং রিজার্ভের আপডেট নোটিফিকেশন 
        পাওয়ার জন্য প্লে স্টোর থেকে আমাদের মোবাইল অ্যাপটি ইনস্টল করে রাখুন। যে কোনো সমস্যা সমাধানে আমাদের লাইভ চ্যাটে যোগাযোগ করুন। ধন্যবাদ
      </span>
    </div>
  </div>
</div>

  );
};

export default ScrollingText;
