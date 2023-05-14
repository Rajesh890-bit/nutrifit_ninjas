import { useEffect, useState } from "react";
import logo from "../logo/NutriFit_Ninjas-removebg-preview.png";
import ExerciseCard from "./ExerciseCard";
import axios, { AxiosResponse } from "axios";
import Timer from "../components/Timer";

interface Data {
  id: number;
  name: string;
  image: string;
  description: string;
}

export default function Exercise() {
  const [data, setData] = useState<Data[]>([]);

  const getExercise = async () => {
    try {
      const response: AxiosResponse<Data[]> = await axios.get<Data[]>(
        `https://dark-gold-pelican-sock.cyclic.app/exercise`
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExercise();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-2">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-13 w-32" src={logo} alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              “Regular physical activity can improve your muscle strength and
              boost your endurance. Exercise delivers oxygen and nutrients to
              your tissues and helps your cardiovascular system work more
              efficiently. And when your heart and lung health improve, you have
              more energy to tackle daily chores.”
            </p>
          </blockquote>
        </figure>

        {data?.map((item: Data, index: number) => (
          <ExerciseCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
