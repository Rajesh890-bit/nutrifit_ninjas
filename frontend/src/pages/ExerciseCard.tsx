import Footer from "../components/Footer";

interface Data {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function ExerciseCard(item: Data) {
  return (
    <>
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
          
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">{item.name}</dt>
                  <dd className="inline">{item.description}</dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src={item.image}
            alt="Product screenshot"
            className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]  w-full h-full"
            // width={500}
          
          />
        </div>
      </div>
    </div>
      </>
  );
}
