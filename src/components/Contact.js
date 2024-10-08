import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  
  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4 sm:pt-[100px]"
    >
      <form
        method="POST"
        action="https://getform.io/f/0b9c6a30-8b61-4a19-976f-bd741b213068"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            ankit1sharma200@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button
          className={`text-white border-2 px-4 py-3 my-8 mx-auto flex items-center ${
            isFormValid
              ? "hover:bg-pink-600 hover:border-pink-600"
              : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!isFormValid} 
        >
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
