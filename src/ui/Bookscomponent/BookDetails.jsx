import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";

import image1 from "../../assets/cover.jpg";
import image2 from "../../assets/tenibus.jpg";
import image3 from "../../assets/newimage.jpg";

const books = [
  {
    id: 1,
    title: "Mummy's Shopping List",
    image: image1,
    price: "₦7,500",
    pages: 42,
    language: "English",
    category: "Children's Book",
    age: "4-9 Years",
    isbn: "978-1234567890",
    desc:
      "A beautifully crafted children's story filled with imagination and meaningful lessons.",
    about:
      "Mummy's Shopping List is a delightful children's book that encourages curiosity, responsibility and family values through an exciting shopping adventure.",
  },

  {
    id: 2,
    title: "Teni's Bus",
    image: image2,
    price: "₦6,500",
    pages: 38,
    language: "English",
    category: "Adventure",
    age: "5-10 Years",
    isbn: "978-9876543210",
    desc:
      "An inspiring adventure designed to spark curiosity and confidence.",
    about:
      "An unforgettable journey teaching courage, teamwork and imagination.",
  },

  {
    id: 3,
    title: "Volley",
    image: image3,
    price: "₦8,000",
    pages: 60,
    language: "English",
    category: "Inspirational",
    age: "8+",
    isbn: "978-222333444",
    desc:
      "A heartfelt story about friendship and resilience.",
    about:
      "Volley inspires readers to embrace challenges while remaining kind and courageous.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function BookDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book)
    return (
      <div className="py-32 text-center">
        Book not found.
      </div>
    );

  return (
    <section className="bg-[#f8f5f0]">

      {/* HERO */}

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            {...fadeUp}
            transition={{ duration: .8 }}
            className="flex justify-center"
          >

            <img
              src={book.image}
              alt={book.title}
              className="w-[320px] lg:w-[380px] aspect-[2/3] rounded-lg shadow-2xl"
            />

          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 1 }}
          >

            <span className="bg-yellow-300 px-3 py-1 rounded-full text-sm">
              Bestseller
            </span>

            <h1 className="text-5xl font-serif mt-6 mb-5">
              {book.title}
            </h1>

            <p className="text-stone-600 text-lg leading-8 mb-8">
              {book.desc}
            </p>

            <h2 className="text-4xl text-amber-700 font-serif mb-8">
              {book.price}
            </h2>

            <div className="flex gap-4">

              <button className="bg-stone-900 cursor-pointer text-white px-8 py-4 rounded-lg">
                Buy Now
              </button>

              <button 
                 onClick={()=> navigate("/books")}
                className="border cursor-pointer border-stone-400 px-8 py-4 rounded-lg">
                Explore Books
              </button>

            </div>

          </motion.div>

        </div>

      </div>

      {/* ABOUT */}

      <motion.section
        {...fadeUp}
        className="max-w-5xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl font-serif mb-8">
          About this book
        </h2>

        <p className="text-stone-600 leading-9 text-lg">
          {book.about}
        </p>

      </motion.section>

      {/* DETAILS */}

      <motion.section
        {...fadeUp}
        className="max-w-6xl mx-auto px-6 pb-20"
      >

        <h2 className="text-4xl font-serif mb-10">
          Book Details
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            ["Pages", book.pages],
            ["Language", book.language],
            ["Category", book.category],
            ["Age", book.age],
            ["ISBN", book.isbn],
            ["Author", "Temilorun Adebiyi"],
            ["Format", "Paperback"],
            ["Publisher", "TAP Books"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <p className="text-sm text-stone-500 mb-2">
                {title}
              </p>

              <h3 className="font-semibold text-lg">
                {value}
              </h3>

            </div>
          ))}

        </div>

      </motion.section>

      {/* RELATED */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-serif mb-10">
            More Books You'll Love
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {books
              .filter((b) => b.id !== book.id)
              .map((item) => (

                <Link
                  key={item.id}
                  to={`/books/${item.id}`}
                  className="group"
                >

                  <img
                    src={item.image}
                    className="aspect-[2/3] rounded-lg object-cover mb-5 transition duration-500 group-hover:scale-105"
                  />

                  <h3 className="font-serif text-2xl">
                    {item.title}
                  </h3>

                </Link>

              ))}

          </div>

        </div>

      </section>

    </section>
  );
}