// import React, { useState } from "react";

// interface FormModel {
//   name: string;
//   email: string;
//   gender: string;
//   password: string;

//   height: Number;
//   weight: Number;
//   age: Number;
//   goal: string;
//   dob: string;
//   country: string;
//   issues: string;
//   activity: string;

//   avatar: string;
//   userId: string;
// }

// const FormData: React.FC = () => {
//   const [formData, setFormData] = useState<FormModel>({
//     name: "",
//     email: "",
//     gender: "",
//     password: "",

//     height: 0,
//     weight: 0,
//     age: 0,
//     goal: "",
//     dob: "",
//     country: "",
//     issues: "",
//     activity: "",

//     avatar: "",
//     userId: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   const {
//     name,
//     email,
//     gender,
//     password,

//     height,
//     weight,
//     age,
//     goal,
//     dob,
//     country,
//     issues,
//     activity,

//     avatar,
//     userId,
//   } = formData;
//   console.log(formData);
//   return (
//     <div>
//       <h3>Sign UP</h3>
//       <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
//         <div className="mb-4">
//           <label htmlFor="name" className="block mb-2 font-medium">
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={name}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="email" className="block mb-2 font-medium">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={email}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-medium">Gender</label>
//           <div>
//             <label className="inline-flex items-center">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="male"
//                 className="form-radio"
//                 checked={gender === "male"}
//                 onChange={handleChange}
//               />
//               <span className="ml-2">Male</span>
//             </label>
//             <label className="inline-flex items-center ml-6">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="female"
//                 className="form-radio"
//                 checked={gender === "female"}
//                 onChange={handleChange}
//               />
//               <span className="ml-2">Female</span>
//             </label>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block mb-2 font-medium">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={password}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 font-medium">Details</label>
//           <div>
//             <label htmlFor="height" className="block mb-2 font-medium">
//               Height
//             </label>
//             <input
//               type="number"
//               id="height"
//               name="height"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={height}
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//         <div>
//           <label htmlFor="weight" className="block mb-2 font-medium">
//             Weight
//           </label>
//           <input
//             type="number"
//             id="weight"
//             name="weight"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={weight}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="age" className="block mb-2 font-medium">
//             Age
//           </label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={age}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="goal" className="block mb-2 font-medium">
//             Goal
//           </label>
//           <select
//             id="goal"
//             name="goal"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={goal}
//             onChange={handleChange}
//           >
//             <option value="">Select Goal</option>
//             <option value="Lose Weight">Lose Weight</option>
//             <option value="Maintain Weight">Maintain Weight</option>
//             <option value="Gain Weight">Gain Weight</option>
//           </select>
//         </div>
//         <div>
//           <label htmlFor="dob" className="block mb-2 font-medium">
//             Date of Birth
//           </label>
//           <input
//             type="date"
//             id="dob"
//             name="dob"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={dob}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="country" className="block mb-2 font-medium">
//             Country
//           </label>
//           <select
//             id="country"
//             name="country"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={country}
//             onChange={handleChange}
//           >
//             <option value="india">India</option>
//             <option value="america">America</option>
//             <option value="russia">Russia</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="issues" className="block mb-2 font-medium">
//             Issues
//           </label>
//           <select
//             id="issues"
//             name="issues"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={issues}
//             onChange={handleChange}
//           >
//             <option value="">Select Issue</option>
//             <option value="Lack of Time">Lack of Time</option>
//             <option value="Healthy Diet Lack Variety">
//               Healthy Diet Lack Variety
//             </option>
//             <option value="Stree Around Food Choice">
//               Stree Around Food Choice
//             </option>
//             <option value="Food Cravings">Food Cravings</option>
//             <option value="I did not face any barrier">
//               I did not face any barrier
//             </option>
//           </select>
//           <div>
//             <label htmlFor="activity" className="block mb-2 font-medium">
//               Activity Level
//             </label>
//             <select
//               id="activity"
//               name="activity"
//               className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               value={activity}
//               onChange={handleChange}
//             >
//               <option value="">Select Activity Level</option>
//               <option value="Not Very Active">Not Very Active</option>
//               <option value="Lightly Active">Lightly Active</option>
//               <option value="Very Active">Very Active</option>
//             </select>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="avatar" className="block mb-2 font-medium">
//             Avatar
//           </label>
//           <input
//             type="text"
//             id="avatar"
//             name="avatar"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={avatar}
//             onChange={handleChange}
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="userId" className="block mb-2 font-medium">
//             User ID
//           </label>
//           <input
//             type="text"
//             id="userId"
//             name="userId"
//             className="w-full px-3 py-2 border border-gray-300 rounded-md"
//             value={userId}
//             onChange={handleChange}
//           />
//         </div>
//         <button
//           type="submit"
//           className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };
// export default FormData;

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormModel {
  name: string;
  email: string;
  gender: string;
  password: string;

  height: number;
  weight: number;
  age: number;
  goal: string;
  dob: string;
  country: string;
  issues: string;
  activity: string;

  avatar: string;
  userId: string;
}

const FormData: React.FC = () => {
  const [formData, setFormData] = useState<FormModel>({
    name: "",
    email: "",
    gender: "",
    password: "",

    height: 0,
    weight: 0,
    age: 0,
    goal: "",
    dob: "",
    country: "",
    issues: "",
    activity: "",

    avatar: "",
    userId: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const {
    name,
    email,
    gender,
    password,

    height,
    weight,
    age,
    goal,
    dob,
    country,
    issues,
    activity,

    avatar,
    userId,
  } = formData;

  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={name}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={email}
            onChange={handleChange}
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Gender</label>
          <div>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                className="form-radio"
                checked={gender === "male"}
                onChange={handleChange}
              />
              <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="gender"
                value="female"
                className="form-radio"
                checked={gender === "female"}
                onChange={handleChange}
              />
              <span className="ml-2">Female</span>
            </label>
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={password}
            onChange={handleChange}
          />
        </div>

        {/* Details */}
        <div className="mb-4">
          <label className="block mb-2 font-medium">Details</label>

          {/* Height */}
          <div>
            <label htmlFor="height" className="block mb-2 font-medium">
              Height
            </label>
            <input
              type="number"
              id="height"
              name="height"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={height}
              onChange={handleChange}
            />
          </div>

          {/* Weight */}
          <div>
            <label htmlFor="weight" className="block mb-2 font-medium">
              Weight
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={weight}
              onChange={handleChange}
            />
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className="block mb-2 font-medium">
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={age}
              onChange={handleChange}
            />
          </div>

          {/* Goal */}
          <div>
            <label htmlFor="goal" className="block mb-2 font-medium">
              Goal
            </label>
            <select
              id="goal"
              name="goal"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={goal}
              onChange={handleChange}
            >
              <option value="">Select Goal</option>
              <option value="Lose Weight">Lose Weight</option>
              <option value="Maintain Weight">Maintain Weight</option>
              <option value="Gain Weight">Gain Weight</option>
            </select>
          </div>

          {/* Date of Birth */}
          <div>
            <label htmlFor="dob" className="block mb-2 font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={dob}
              onChange={handleChange}
            />
          </div>

          {/* Country */}
          <div>
            <label htmlFor="country" className="block mb-2 font-medium">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={country}
              onChange={handleChange}
            >
              <option value="india">India</option>
              <option value="america">America</option>
              <option value="russia">Russia</option>
            </select>
          </div>
          {/* Issues */}
          <div>
            <label htmlFor="issues" className="block mb-2 font-medium">
              Issues
            </label>
            <select
              id="issues"
              name="issues"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={issues}
              onChange={handleChange}
            >
              <option value="">Select Issue</option>
              <option value="Lack of Time">Lack of Time</option>
              <option value="Healthy Diet Lack Variety">
                Healthy Diet Lack Variety
              </option>
              <option value="Stress Around Food Choice">
                Stress Around Food Choice
              </option>
              <option value="Food Cravings">Food Cravings</option>
              <option value="I did not face any barrier">
                I did not face any barrier
              </option>
            </select>
          </div>

          {/* Activity Level */}
          <div>
            <label htmlFor="activity" className="block mb-2 font-medium">
              Activity Level
            </label>
            <select
              id="activity"
              name="activity"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={activity}
              onChange={handleChange}
            >
              <option value="">Select Activity Level</option>
              <option value="Not Very Active">Not Very Active</option>
              <option value="Lightly Active">Lightly Active</option>
              <option value="Very Active">Very Active</option>
            </select>
          </div>
        </div>

        {/* Avatar */}
        <div className="mb-4">
          <label htmlFor="avatar" className="block mb-2 font-medium">
            Avatar
          </label>
          <input
            type="text"
            id="avatar"
            name="avatar"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={avatar}
            onChange={handleChange}
          />
        </div>

        {/* User ID */}
        <div className="mb-4">
          <label htmlFor="userId" className="block mb-2 font-medium">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={userId}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormData;
