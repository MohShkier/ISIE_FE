import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";
import { useTranslation } from 'react-i18next';
import { useLanguage } from "../../context/LanguageContext";

const ContactForm = () => {
  const { language, changeLanguage } = useLanguage();
  const PUBLIC_EMAILJS_KEY = process.env.REACT_APP_PUBLIC_EMAILJS_KEY;
  
  // ✅ Validation Schema
  const { t, i18n } = useTranslation();

  const validationSchema = yup.object().shape({
    firstName: yup.string().required(t("First name is required")),
    lastName: yup.string().required(t("Last name is required")),
    email: yup.string().email(t("Invalid email")).required(t("Email is required")),
    company: yup.string().required(t("Company name is required")),
    phone: yup.string().matches(/\+?\d{10,15}/, t("Invalid phone number")).required(t("Phone number is required")),
    message: yup.string().required(t("Message is required")),
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
        process.env.REACT_APP_SERVICE_ID, // Replace with your EmailJS service ID
        process.env.REACT_APP_TEMPLATE_ID_, // Replace with your EmailJS template ID
        data,
        PUBLIC_EMAILJS_KEY // This should be your EmailJS user ID (public key)
      );
      reset(); // Reset the form after submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${language === "ar" ? "font-noto" : "font-sans"} space-y-4 bg-white p-6 rounded-md`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">{t("First Name")}</label>
          <input
            {...register("firstName")}
            placeholder={t("First Name")}
            className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 ${language === "ar" ? "font-noto" : "font-sans"}`}
          />
          <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">{t("Last Name")}</label>
          <input
            {...register("lastName")}
            placeholder={t("Last Name")}
            className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 ${language === "ar" ? "font-noto" : "font-sans"}`}
          />
          <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">{t("E-Mail")}</label>
        <input
          {...register("email")}
          type="email"
          placeholder="example@email.com"
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 ${language === "ar" ? "font-noto" : "font-sans"}`}
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      {/* Company Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">{t("Company Name")}</label>
        <input
          {...register("company")}
          placeholder={t("Company Name")}
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 ${language === "ar" ? "font-noto" : "font-sans"}`}
        />
        <p className="text-red-500 text-sm">{errors.company?.message}</p>
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-gray-700">{t("Phone Number")}</label>
        <input
          {...register("phone")}
          type="tel"
          placeholder="+1234567890"
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 ${language === "ar" ? "font-noto" : "font-sans"}`}
        />
        <p className="text-red-500 text-sm">{errors.phone?.message}</p>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700">{t("Message")}</label>
        <textarea
          {...register("message")}
          rows="4"
          placeholder={t("Tell us more...")}
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 ${language === "ar" ? "font-noto" : "font-sans"}`}
        ></textarea>
        <p className="text-red-500 text-sm">{errors.message?.message}</p>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-[#1D2736] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition !mt-8 md:!mt-16 ${language === "ar" ? "font-noto" : "font-sans"}`}
      >
        {isSubmitting ? t("Submitting...") : t("Submit")}
      </button>
    </form>
  );
};

export default ContactForm;
