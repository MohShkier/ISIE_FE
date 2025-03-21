import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

const ContactForm = () => {
  // ✅ Validation Schema
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    company: yup.string().required("Company name is required"),
    phone: yup.string().matches(/\+?\d{10,15}/, "Invalid phone number").required("Phone number is required"),
    message: yup.string().required("Message is required"),
  });

  // ✅ React Hook Form Setup
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // ✅ Send Form Data via EmailJS
  const onSubmit = async (data) => {
    try {
      await emailjs.send(
        "service_fppppsu", // Replace with your EmailJS service ID
        "template_t8qb89d", // Replace with your EmailJS template ID
        data,
        "PskMBrsqFZhuCfvug" // Replace with your EmailJS user ID (public key)
      );
      alert("Message sent successfully!");
      reset(); // Reset the form after submission
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-md shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            {...register("firstName")}
            placeholder="First Name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            {...register("lastName")}
            placeholder="Last Name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">E-mail</label>
        <input
          {...register("email")}
          type="email"
          placeholder="example@email.com"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Company Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
          {...register("company")}
          placeholder="Company Name"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{errors.company?.message}</p>
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="+1234567890"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        />
        <p className="text-red-500 text-sm">{errors.phone?.message}</p>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          {...register("message")}
          rows="4"
          placeholder="Tell us what we can help you with"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
        <p className="text-red-500 text-sm">{errors.message?.message}</p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1D2736] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition !mt-16"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ContactForm;
