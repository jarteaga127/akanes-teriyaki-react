import ContactForm from "../components/ContactForm";

const ContactUs = () => {
    return ( 
        <section className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8">
<h1 className="text-4xl sm:text-5xl font-bold text-[#2a0808] tracking-tight mb-2">Contact us</h1>
<p>Any questions, suggestions, request or what not, hit us up. We'd love to hear from you.</p>

{/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Info & Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Restaurant Details Card */}
            <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white border-b border-zinc-100 dark:border-zinc-800 pb-4">
                Visit Us
              </h2>

              <div className="space-y-4 text-sm text-zinc-600 dark:text-zinc-300">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <span className="text-red-800 text-lg font-bold">📍</span>
                  <div>
                    <dl className="text-sm space-y-2 text-slate-200">
            <div>
              <dt className="font-semibold text-xs text-red-300 uppercase tracking-wider">Address</dt>
              <dd className="mt-0.5">〒123-4567 Tokyo, Nerima-ku 1-23-4 Shizuku Building 1F</dd>
            </div>
            <div>
              <dt className="font-semibold text-xs text-red-300 uppercase tracking-wider">TEL</dt>
              <dd className="mt-0.5">012-3456-7890</dd>
            </div>
            <div>
              <dt className="font-semibold text-xs text-red-300 uppercase tracking-wider">Hours</dt>
              <dd className="mt-0.5">11:00 A.M. ~ 11:00 P.M. <span className="text-xs text-slate-300 block sm:inline">(Eat in closes at 10:30 P.M.)</span></dd>
            </div>
          </dl>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <span className="text-red-800 text-lg font-bold">📞</span>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Phone</p>
                    <p>(206) 555-0192</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <span className="text-red-800 text-lg font-bold">✉️</span>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Email</p>
                    <p>hello@akanesteriyaki.com</p>
                  </div>
                </div>
              </div>

              {/* Hours of Operation */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-3">
                  Opening Hours
                </h3>
                <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li className="flex justify-between">
                    <span>Mon – Thu</span>
                    <span className="font-medium text-zinc-900 dark:text-zinc-200">11:00 AM – 9:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fri – Sat</span>
                    <span className="font-medium text-zinc-900 dark:text-zinc-200">11:00 AM – 10:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-zinc-900 dark:text-zinc-200">12:00 PM – 8:30 PM</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Actions / Note Card */}
            <div className="bg-red-900/10 border border-red-800/20 p-6 rounded-2xl text-red-900 dark:text-red-300">
              <h3 className="font-bold text-base mb-1">Planning a large party?</h3>
              <p className="text-sm opacity-90 mb-3">
                For groups over 8 people or private events, please reserve at least 48 hours in advance.
              </p>
            </div>
          </div>

          <ContactForm/>

        {/* Embedded Map Container */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
          <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
            <h3 className="font-bold text-zinc-900 dark:text-white text-sm sm:text-base">Find Us on the Map</h3>
            <span className="text-xs text-zinc-500">Free parking in rear</span>
          </div>
          <div className="w-full h-72 bg-zinc-200 dark:bg-zinc-800 relative flex items-center justify-center">
            {/* Embedded Google Maps iframe can replace this container */}
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">
              [ Embedded Interactive Map - Seattle Downtown Area ]
            </p>
          </div>
        </div>
        </div>
        </section>
     );
}
 
export default ContactUs;