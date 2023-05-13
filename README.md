# nutrifit_ninjas

NutriFit Ninjas
////////////----
const FormData = () => {
const [formData, setFormData] = useState({
name: "",
email: "",
gender: "",
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const { name, value } = e.target;
setFormData((prevData) => ({
...prevData,
[name]: value,
}));
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
console.log(formData);
};

return (
<form onSubmit={handleSubmit} className="max-w-sm mx-auto">
<div className="mb-4">
<label htmlFor="name" className="block mb-2 font-medium">
Name
</label>
<input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.name}
          onChange={handleChange}
        />
</div>
<div className="mb-4">
<label htmlFor="email" className="block mb-2 font-medium">
Email
</label>
<input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          value={formData.email}
          onChange={handleChange}
        />
</div>
<div className="mb-4">
<label className="block mb-2 font-medium">Gender</label>
<div>
<label className="inline-flex items-center">
<input
type="radio"
name="gender"
value="male"
className="form-radio"
checked={formData.gender === "male"}
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
checked={formData.gender === "female"}
onChange={handleChange}
/>
<span className="ml-2">Female</span>
</label>
<label className="inline-flex items-center ml-6">
<input
type="radio"
name="gender"
value="other"
className="form-radio"
checked={formData.gender === "other"}
onChange={handleChange}
/>
<span className="ml-2">Other</span>
</label>
</div>
</div>
<button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
      >
Submit
</button>
</form>
);
};

export default FormData;

//-------------
