import React from "react";
import { useForm } from "react-hook-form";

const ContactUsForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message Sent!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
          <input
            id="firstName" 
            type="text"
            placeholder="XXXXXX"
            className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
          <input
            id="lastName" 
            type="text"
            placeholder="XXXXXX"
            className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Your email</label>
        <input
          id="email" 
          type="email"
          placeholder="name@slt.com"
          className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
              message: "Please enter a valid email address",
            },
          })}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
        <input
          id="phone" 
          type="tel"
          placeholder="+94 xx xxx xxxx"
          className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("phone", {
            required: "Phone number is required",
            pattern: {
              value: /^\+94\d{9}$/,
              message: "Please enter a valid phone number",
            },
          })}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Your message</label>
        <textarea
          id="message" 
          rows="4"
          placeholder="Leave a comment..."
          className="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("message", { required: "Message is required" })}
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>
      <p className="text-sm text-gray-400">
        By submitting this form you agree to our{" "}
        <button
          type="button"
          onClick={() => alert("Redirect to terms and conditions")}
          className="text-blue-500 underline bg-transparent border-none cursor-pointer"
        >
          terms and conditions
        </button>{" "}
        and{" "}
        <button
          type="button"
          onClick={() => alert("Redirect to privacy policy")}
          className="text-blue-500 underline bg-transparent border-none cursor-pointer"
        >
          privacy policy
        </button>.
      </p>
      <button
        type="submit"
        className="w-full bg-blue-600 py-2 px-4 rounded-lg text-white font-medium hover:bg-blue-700 transition"
      >
        Send message
      </button>
    </form>
  );
};

export default ContactUsForm;
