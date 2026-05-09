import { RiDoubleQuotesL } from "react-icons/ri";

export default function AboutReaders() {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto mb-14 text-center">
              <p className="uppercase tracking-[0.3em] text-sm text-stone-700 mb-4">
                Reader Stories
              </p>
    
              <h2 className="text-4xl text-stone-800 lg:text-5xl font-semibold mb-6">
                What Readers Say About TAP Books
              </h2>
    
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Our readers trust TAP Books for discovering inspiring,
                educational, and life-changing books.
              </p>
            </div>
    
            <div className="flex cursor-pointer overflow-x-auto gap-4 [scrollbar-width: none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {[
                {
                  name: 'Sarah Johnson',
                  text: 'TAP Books helped me rediscover my love for reading. Their collection is amazing and delivery is always fast.',
                },
                {
                  name: 'Michael Daniels',
                  text: 'I love the modern experience and carefully curated books. Every recommendation has been worth it.',
                },
                {
                  name: 'Aisha Bello',
                  text: 'The platform feels personal and inspiring. I always find books that help me grow professionally and personally.',
                },
                {
                  name: 'David Clark',
                  text: 'Excellent customer service and a fantastic range of books. TAP Books stands out from other bookstores.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="min-w-[320px] lg:min-w-[380px] bg-[#f1f1f1] border border-gray-100 rounded-sm p-8 shadow-sm flex flex-col gap-6"
                >
                  <div className="text-5xl text-stone-700">
                    <RiDoubleQuotesL />
                  </div>
    
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {item.text}
                  </p>
    
                  <div>
                    <h3 className="font-semibold text-xl">{item.name}</h3>
                    <p className="text-gray-500 text-sm">Verified Reader</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
  )
}
