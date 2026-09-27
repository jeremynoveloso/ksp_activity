const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore eaque similique tempora porro tempore veritatis facere, id, sequi assumenda, natus amet. Ut harum soluta ab molestias ducimus impedit porro.",
    name: "Jeremy Noveloso",
    role: "CEO",
    image: "https://tse3.mm.bing.net/th/id/OIP.P3PzMAf_ul8bEPdAf9q7GQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore eaque similique tempora porro tempore veritatis facere, id, sequi assumenda, natus amet. Ut harum soluta ab molestias ducimus impedit porro.",
    name: "Jeremy Noveloso",
    role: "CEO",
    image: "https://tse3.mm.bing.net/th/id/OIP.P3PzMAf_ul8bEPdAf9q7GQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam inventore eaque similique tempora porro tempore veritatis facere, id, sequi assumenda, natus amet. Ut harum soluta ab molestias ducimus impedit porro.",
    name: "Jeremy Noveloso",
    role: "CEO",
    image: "https://tse3.mm.bing.net/th/id/OIP.P3PzMAf_ul8bEPdAf9q7GQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];

function QuoteIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-slate-400"></svg>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full  px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-[10px] font-bold tracking-wide bg-gradient-to-r from-orange-600 to-red-800 text-transparent bg-clip-text">
            WHAT OUR CLIENTS SAY
          </p>

          <h2 className="text-3xl font-extrabold tracking-wide sm:text-4xl">
            Trusted by Businesses Worldwide
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="flex min-h-[220px] flex-col justify-between rounded-md bg-white p-6 shadow-sm "
            >
              {/* Quote */}
              <div>
                <QuoteIcon />

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  “{testimonial.quote}”
                </p>
              </div>

              {/* Author */}
              <div className="mt-8 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
