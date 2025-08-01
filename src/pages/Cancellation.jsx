import React from 'react';
import Navbar from '../section/Navbar';
import Footer from '../section/Footer';

const CancellationRefundPolicy = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed text-white py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-[radial-gradient(circle,rgba(0,30,60,0.8)_10%,rgba(0,0,0,1)_60%)] bg-fixed p-8 rounded-lg shadow-[0_0_30px_#00aaff] border border-white">
        <h1 className="text-3xl sm:text-4xl text-center text-blue-400 font-bold mb-8">Cancellation and Refund Policy</h1>

        <h2 className="text-2xl text-blue-400 font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4 text-gray-200">
          At the Abtik Group of Companies, we strive to provide the highest level of service to our clients. This
          Cancellation and Refund Policy outlines the terms and conditions under which cancellations and refunds are
          processed for the services offered by Abtik Services LLP, Abtik Startup Advisor Private Limited, and Abtik
          Financial Services Private Limited.
        </p>

        <h2 className="text-2xl text-blue-400 font-semibold mb-4">2. General Policy</h2>
        <p className="mb-4 text-gray-200">
          Our cancellation and refund policies are designed to be fair and transparent, ensuring clarity for our
          clients regarding their rights and responsibilities. The specific terms may vary based on the type of
          service provided.
        </p>

        <h2 className="text-2xl text-blue-400 font-semibold mb-4">3. Abtik Services LLP</h2>
        <h3 className="text-xl text-blue-400 font-semibold mb-3">Cancellation Policy:</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>Clients may cancel their service agreements by providing written notice at least 30 days in advance.</li>
          <li>For project-based services, cancellations made less than 30 days before the project start date will
              incur a cancellation fee of 25% of the total project cost.</li>
        </ul>
        <h3 className="text-xl text-blue-400 font-semibold mb-3">Refund Policy:</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>Refunds for cancelled services will be processed within 30 days of cancellation.</li>
          <li>No refunds will be issued for services already rendered.</li>
          <li>If a service is terminated by Abtik Services LLP due to non-compliance with our terms of service, no
              refund will be provided.</li>
        </ul>

        <h2 className="text-2xl text-blue-400 font-semibold mb-4">4. Abtik Startup Advisor Private Limited</h2>
        <h3 className="text-xl text-blue-400 font-semibold mb-3">Cancellation Policy:</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>Clients may cancel advisory services by providing written notice at least 14 days in advance.</li>
          <li>For mentorship programs, cancellations made less than 14 days before the start date will incur a
              cancellation fee of 20% of the total program cost.</li>
        </ul>
        <h3 className="text-xl text-blue-400 font-semibold mb-3">Refund Policy:</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>Refunds for advisory services will be processed within 30 days of cancellation.</li>
          <li>No refunds will be issued for sessions or services already provided.</li>
          <li>If a program is terminated by Abtik Startup Advisor Private Limited due to a breach of agreement, no
              refund will be provided.</li>
        </ul>

        <h2 className="text-2xl text-blue-400 font-semibold mb-4">5. Abtik Financial Services Private Limited</h2>
        <h3 className="text-xl text-blue-400 font-semibold mb-3">Cancellation Policy:</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>Clients may cancel financial services by providing written notice at least 30 days in advance.</li>
          <li>For financial planning services, cancellations made less than 30 days before the service start date will
              incur a cancellation fee of 15% of the total service cost.</li>
        </ul>
        <h3 className="text-xl text-blue-400 font-semibold mb-3">Refund Policy:</h3>
        <ul className="list-disc pl-6 mb-4 text-gray-200">
          <li>Refunds for cancelled financial services will be processed within 45 days of cancellation.</li>
          <li>No refunds will be issued for financial advice or strategies already provided.</li>
          <li>If services are terminated by Abtik Financial Services Private Limited due to non-compliance with our
              terms, no refund will be provided.</li>
        </ul>

        <h2 className="text-2xl text-blue-400 font-semibold mb-4">6. Exceptional Circumstances</h2>
        <p className="mb-4 text-gray-200">
          In certain exceptional circumstances, such as severe illness or other significant life events, we may
          consider waiver of cancellation fees or offer partial refunds at our discretion. Clients must provide
          appropriate documentation to support their request.
        </p>

        <h2 className="text-2xl text-blue-400 font-semibold mb-4">7. Contact Us</h2>
        <p className="mb-4 text-gray-200 font-bold">
          For any questions or requests regarding cancellations or refunds, please contact us at:
        </p>
        <p className="mb-4 text-gray-200">
          Email: <a href="mailto:info@abtikservices.com" className="text-blue-400 hover:underline">info@abtikservices.com</a>
        </p>

        <h2 className="text-2xl text-blue-400 font-semibold mb-4">8. Changes to This Policy</h2>
        <p className="mb-4 text-gray-200">
          We may update this Cancellation and Refund Policy from time to time. We will notify you of any changes by
          posting the new policy on our website. Your continued use of our services after any changes constitutes
          acceptance of the new policy.
        </p>

        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>This Cancellation and Refund Policy applies to all entities within the Abtik Group of Companies,
             including Abtik Services LLP, Abtik Startup Advisor Private Limited, and Abtik Financial Services
             Private Limited.</p>
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
};

export default CancellationRefundPolicy;