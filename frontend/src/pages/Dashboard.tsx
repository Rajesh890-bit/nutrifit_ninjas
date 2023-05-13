import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

interface Data {
  name: string;
  category: string;
  calories: number;
  id : number;
  order: string;
  genus: string;
  nutritions: {
    fat: number;
    sugar: number;
    carbohydrates: number;
    protein: number;
  };
  foodId: string;
}

export default function Dashboard() {
  const [data, setData] = useState<Data[]>([]);

  const getFood = async () => {
    try {
      const response: AxiosResponse<Data[]> = await axios.get<Data[]>('http://localhost:4242/food');
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getFood();
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="max-w-4xl bg-zinc-200 border border-gray-300 m-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 font-bold border-b">ID</th>
            <th className="px-4 py-2 font-bold border-b">Name</th>
            <th className="px-4 py-2 font-bold border-b">Category</th>
            <th className="px-4 py-2 font-bold border-b">Calories</th>
            <th className="px-4 py-2 font-bold border-b">Order</th>
            <th className="px-4 py-2 font-bold border-b">Genus</th>
            <th className="px-4 py-2 font-bold border-b">Nutritions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((item: Data, index: number) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{item.id}</td>
                <td className="px-4 py-2 border-b">{item.name}</td>
                <td className="px-4 py-2 border-b">{item.category}</td>
                <td className="px-4 py-2 border-b">{item.calories}</td>
                <td className="px-4 py-2 border-b">{item.order}</td>
                <td className="px-4 py-2 border-b">{item.genus}</td>
                <td className="px-4 py-2 border-b">
                  <ul>
                    <li>Fat: {item.nutritions.fat}</li>
                    <li>Sugar: {item.nutritions.sugar}</li>
                    <li>Carbohydrates: {item.nutritions.carbohydrates}</li>
                    <li>Protein: {item.nutritions.protein}</li>
                  </ul>
                </td>
                <td className="px-4 py-2 border-b">{item.foodId}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
