import React from 'react'
import TermsPolicyTextCard from './../../../../components/TermsPolicyTextCard/TermsPolicyTextCard';

const page = () => {
  return (
    <section className='w-full py-10'>
      <h3 className='roboto text-[28px] font-medium text-[#333]'>TECHFORING PRIVACY POLICY</h3>
      <p className='roboto text-[16px] leading-6 text-light-gray pe-3 mt-5'>
        We maintain the utmost respect for your privacy and information. We offer our privacy policy for your review, so that you can directly understand how your data is collected and handled. The following explains the practices we follow regarding handling data.
      </p>

      <TermsPolicyTextCard
        title="General"
        paragraph1="This Privacy Policy governs the collection, processing, and protection of personal data by TechForing (	&quot;we&quot; ,	&quot;us&quot; or 	&quot;our	&quot;). We are committed to upholding the highest standards of privacy and data protection in compliance with applicable laws and regulations."
      />
      <TermsPolicyTextCard
        title="We Prioritize Your Privacy"
        paragraph1="At TechForing, we maintain the utmost respect for your privacy and information. We offer our privacy policy for your review so that you can directly understand how your data is collected and handled. The following explains the practices we follow regarding handling data."
      />
      <TermsPolicyTextCard
        title="Comprehensive Data Protection Measures"
        paragraph1="We are dedicated to employing comprehensive measures to safeguard your data integrity. We implement a multi-faceted approach, incorporating technical, administrative, and physical safeguards to mitigate risks such as theft, loss, misuse, unauthorized access, alteration, disclosure, and destruction of your information.
        "
      />
      <TermsPolicyTextCard
        title="Data Protection Measures"
        paragraph1="Your information is accessed only by authorized personnel who are meticulously trained to handle it with the utmost confidentiality. We uphold stringent access controls and protocols to ensure that your data remains secure. Additionally, all information provided to TechForing is shielded by industry-standard security measures, including robust firewalls and encryption protocols such as secure socket layer (SSL) encryption.
        "/>
      <TermsPolicyTextCard
        title="Techforing Uses Your Information To"
        paragraph1="We collect and process your personal data for specific and legitimate purposes, including:"
        paragraph2="We do not process your data in a manner incompatible with these purposes, and we do not use automated decision-making processes that produce legal effects concerning you."
        lists={[
          "Provide your requested service.",
          "Fulfill obligations arising from contracts between you and TechForing.",
          "Send you notifications about changes to our services."
        ]} />

      <TermsPolicyTextCard
        title="Protection of Your Information"
        paragraph1="At TechForing, we are committed to safeguarding the confidentiality of the information you entrust to us. We adhere to strict principles regarding the handling of your data."
      />

      <TermsPolicyTextCard
        title="Non-Disclosure Policy"
        paragraph1="We do not engage in the sale, lease, or rental of any information provided to us by our users. Exceptions to this policy are limited and include scenarios where:
        "
        lists={[
          "You have expressly granted us permission to disclose your information.",
          "We are legally obligated to disclose information pursuant to applicable laws or regulations",
          "Disclosure is necessary to protect the rights, property, or safety of TechForing, our customers, or others."
        ]} />

      <TermsPolicyTextCard
        title="Limited Sharing with Trusted Entities"
        paragraph1="We limit the sharing of information to entities within TechForing and third-party service providers who assist us in the operation of our website and the provision of our services. These entities are bound by strict confidentiality agreements and are only provided with the information necessary to perform their designated tasks."
      />
      <TermsPolicyTextCard
        title="Business Transfers"
        paragraph1="In the event of a merger, acquisition, or sale of assets, your personal information may be disclosed to prospective buyers or sellers as part of the due diligence process. Additionally, if TechForing or its assets are acquired by a third party, your information may be transferred as a business asset. We will ensure that any such transfers comply with applicable data protection laws and that your rights remain protected."
      />

      <TermsPolicyTextCard
        title="International Data Transfers"
        paragraph1="By using our services and providing your personal information to TechForing, you consent to the transfer, storage, and processing of your data across borders to other jurisdictions where we operate. We ensure that such transfers comply with applicable data protection laws and that adequate safeguards are in place to protect your data."
        paragraph2="We may transfer your data to countries outside the European Economic Area (EEA), such as the United States or Turkey, where data protection laws may differ from those in your jurisdiction. In such cases, we will take appropriate measures to ensure the continued protection of your data rights."
      />

      <TermsPolicyTextCard
        title="Your Ability To Control Information"
        paragraph1="Upon establishing an account or submitting your information to TechForing, we will make contact via email, telephone, or postal mail. During contact, we may notify you of new services TechForing offers. You can opt out of being contacted by deactivating your account with us. If you no longer desire to maintain your TechForing account, please contact us and we will have your data removed from our list of contacts."
        paragraph2="You uphold the right to access the information we hold about you. Please email us for more details."
      />
      <TermsPolicyTextCard
        title="Collection of Personal Information"
        paragraph1="We collect personal information directly from you when you:
        "
        lists={[
          "Register for our services.",
          "Engage in transactions through our platform.",
          "Interact with our website or services, such as through Live Chat or customer support inquiries."
        ]}
        paragraph2="As part of our commitment to providing a seamless and personalized experience on our platform, we employ standard logging practices to gather certain information about your visit. This information includes:
        "
        lists2={[
          "The domain name from which your visit originated.",
          "Your current IP address.",
          "Web browser type.",
          "Internet service provider.",
          "Exit page.",
          "Referral page.",
          "Operating system.",
          "Date and time stamp of your visit."
        ]}
      />

      <TermsPolicyTextCard
        title="Purpose of Information Collection"
        paragraph1="The data collected is utilized for statistical analysis, tracking usage patterns, and optimizing the performance and content delivery of our platform. By analyzing this data, we can better understand user behavior, preferences, and trends, allowing us to tailor our services to meet your needs more effectively."
      />

      <TermsPolicyTextCard
        title="User Anonymity and Privacy Protection"
        paragraph1="It's important to note that we do not use the aforementioned information to identify you as an individual user. Instead, we aggregate and anonymize this data to maintain your privacy and anonymity while still deriving valuable insights to enhance your overall experience."
      />

      <TermsPolicyTextCard
        title="Cookie Usage and User Experience Enhancement"
        paragraph1="At TechForing, we use cookies to enhance your browsing experience and optimize the functionality of our website. Cookies serve several purposes, including:
          "
        lists={[
          "Convenience of Information Storage: Cookies enable us to store certain information on your device, allowing you to navigate our website more efficiently without the need to repeatedly enter your details. This enhances user convenience and streamlines the browsing process."
          , "Usage Monitoring and Site Improvement: Cookies are also employed to monitor the usage of our services and site features. By analyzing aggregated data from cookies, we gain valuable insights into user behavior, preferences, and trends. This information helps us continually improve our website's functionality, content, and user experience."
        ]}

      />

      <TermsPolicyTextCard
        title="Cookie Placement and User Control"
        paragraph1="When you visit our site, cookies are automatically placed on your device or computer. This process is designed to optimize your experience and facilitate site improvement efforts. &#013;
          We respect your privacy and provide you with control over cookie usage. You can manage your cookie preferences by:
          "
        lists={[
          "Adjusting your browser settings to reject all cookies."
          , "Selecting trusted sites or accepting cookies only from sites you're currently visiting."
        ]}
        paragraph2="It's important to note that disabling cookies may limit certain functionalities and features of our website. However, rest assured that you can still access the majority of our content and services even with cookies disabled.
          "
      />

      <TermsPolicyTextCard
        title="External Links"
        paragraph1="Our website may contain links to third-party websites or services. This Privacy Policy applies solely to information collected on the TechForing website. We are not responsible for the privacy practices or content of third-party sites. We encourage you to review the privacy policies of any external sites before providing any personal information."
      />

      <TermsPolicyTextCard
        title="Changes to the Privacy Policy"
        paragraph1="We reserve the right to update or modify this Privacy Policy at any time, without prior notice, to reflect changes in our data processing practices or legal requirements. We will notify you of any material changes to this policy by posting the updated version on our website."
        paragraph2="Your continued use of our services after the posting of changes to this Privacy Policy constitutes your acceptance of such changes. We recommend that you review this policy periodically for updates."
      />

      <TermsPolicyTextCard
        title="Thank you for entrusting us with your personal information."
        paragraph1="We are committed to protecting your privacy and ensuring the security and confidentiality of your data in accordance with applicable laws and regulations."
      />
      <p className="mt-2"> <b>TechForing Legal Team.</b> </p>


    </section>
  )
}

export default page