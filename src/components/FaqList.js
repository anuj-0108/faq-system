import React, { useEffect, useState } from "react";
import { fetchFAQs } from "../api";

const FaqList = ({ lang }) => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const loadFAQs = async () => {
      const data = await fetchFAQs(lang);
      setFaqs(data);
    };
    loadFAQs();
  }, [lang]);

  return (
    <div>
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3>{faq.question}</h3>
          <p>{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqList;
