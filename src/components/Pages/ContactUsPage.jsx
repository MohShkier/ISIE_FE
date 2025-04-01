import ContactForm from "../SignleProduct/ContactForm";
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../context/LanguageContext';
function ContactUsForm() {
  const { language, changeLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:pt-44 pt-36">
        <h1 className="lg:text-5xl text-3xl  mb-10 ">{t("getIn")}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12">
          {/* Left Section */}
          <div className="bg-gradient-to-bl from-[#0A1A33] to-[#1D2736B2] p-8 rounded-lg text-white  space-y-8">
            {/* Visit Us Section */}
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-blue-300"></i> {t("Visit Us")}
              </h2>
              <div className="w-full h-52">
                <iframe
                  className="rounded-lg border-2 border-gray-400 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.684371246759!2d35.97192012389038!3d31.887997928886385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b59376ad903e3%3A0xee043e897dcf71e7!2zSVNJRSDYtNix2YPYqSDYpdi02LHYp9mC2Kkg2LTZhdizINmE2YTYqtis2YfZitiy2KfYqiDYp9mE2LXZhtin2LnZitip!5e0!3m2!1sar!2sjo!4v1740183138581!5m2!1sar!2sjo"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                  aria-label="Google Maps location of our office"
                ></iframe>
              </div>
              <p className={`mt-2 text-gray-300 ${language === "ar" ? "font-noto" : "font-sans"}`}>{t("ComeSay")}</p>
            </section>

            {/* Chat Section */}
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <i className="fas fa-comments text-blue-300"></i> {t("Chat With Us")}
              </h2>
              <p className={`text-gray-300 ${language === "ar" ? "font-noto" : "font-sans"}`}>{t("ourFriendly")}</p>
              <a
                href="mailto:info@ishraqitshams.com"
                className={`mt-2 inline-block bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-500 transition font-sans`}
              >
                <i className={`fas fa-envelope  ${language === "ar" ? "ml-2" : "mr-2"}`  }></i>info@ishraqitshams.com
              </a>
            </section>

            {/* Call Us Section */}
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <i className="fas fa-phone-alt text-blue-300"></i>{t("Call Us")}
              </h2>
              <p className={`${language === "ar" ? "font-noto" : "font-sans"} text-gray-300`}>
                {t("duration")}
              </p>
              <a
                href="tel:+96264161314"
                className={`mt-2 inline-block bg-green-600 px-5 py-2 rounded-lg text-white hover:bg-green-500 transition font-sans`}
              >
                <i className="fas fa-phone mr-2"></i> +(962) 064161314
              </a>
            </section>

            {/* Social Media Section */}
    
          </div>

          {/* Right Section: Contact Form */}
          <ContactForm />
        </div>
      </div>

      {/* Tailwind Utility Styles */}
      <style jsx>{`
        .social-btn {
          @apply w-10 h-10 flex items-center justify-center text-white text-xl rounded-full transition;
        }
      `}</style>
    </>
  );
}

export default ContactUsForm;
