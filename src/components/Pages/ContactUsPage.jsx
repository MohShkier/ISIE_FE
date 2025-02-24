import ContactForm from "../SignleProduct/ContactForm";

function ContactUsForm() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 pt-44">
        <h1 className="text-3xl font-bold mb-10">Get in touch</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12">
          {/* Left Section */}
          <div className="bg-gradient-to-bl from-[#0A1A33] to-[#1D2736B2] p-8 rounded-lg text-white shadow-lg space-y-8">
            {/* Visit Us Section */}
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-blue-300"></i> Visit us
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
              <p className="mt-2 text-gray-300">Come say hello at our office.</p>
            </section>

            {/* Chat Section */}
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <i className="fas fa-comments text-blue-300"></i> Chat with us
              </h2>
              <p className="text-gray-300">Our friendly team is here to help.</p>
              <a
                href="mailto:support@example.com"
                className="mt-2 inline-block bg-blue-600 px-5 py-2 rounded-lg text-white hover:bg-blue-500 transition"
              >
                <i className="fas fa-envelope mr-2"></i> support@example.com
              </a>
            </section>

            {/* Call Us Section */}
            <section>
              <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <i className="fas fa-phone-alt text-blue-300"></i> Call us
              </h2>
              <p className="text-gray-300">
                <strong>Sun - Thu</strong> from <strong>8 AM to 5 PM</strong>
              </p>
              <a
                href="tel:+1234567890"
                className="mt-2 inline-block bg-green-600 px-5 py-2 rounded-lg text-white hover:bg-green-500 transition"
              >
                <i className="fas fa-phone mr-2"></i> +1 (234) 567-890
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
