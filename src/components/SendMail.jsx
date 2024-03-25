import { useState } from 'react';

export const SendMail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    fillIn: ''
  });
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateEmail = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address.'
      });
    } else {
      setErrors({
        ...errors,
        email: ''
      });
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
      setErrors({
        ...errors,
        fillIn: 'Please fill in all the inputs.'
      });
      return;
    }

    emailjs.send("service_vxy5gyu", "template_alrs0u3", formData)
      .then(function (res) {
        setSuccessMessage('Thank you! I will get back to you as soon as possible.');
        setErrors({
          email: '',
          fillIn: ''
        });
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(function (error) {
        alert("An Error has occurred: " + error);
      });
  };

  return (
    <div className="pt-3 rounded-md w-96 max-w-full">
      {successMessage && <p className="text-green-300 font-bold pt-1">{successMessage}</p>}
      {errors.fillIn && <p className="text-red-600 font-bold p-1">{errors.fillIn}</p>}
      <form onSubmit={sendEmail}>
        <label htmlFor="name" className="font-medium text-slate-50 block mb-1">
          Name/Company
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 p-3"
        />
        <label htmlFor="email" className="font-medium text-slate-50 block mb-1 mt-6">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onBlur={validateEmail}
          onChange={handleChange}
          className="block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 p-3"
        />
        {errors.email && <p className="text-red-600 font-bold p-1">{errors.email}</p>}
        <label htmlFor="message" className="font-medium text-slate-50 block mb-1 mt-6">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          className="max-h-32 block w-full rounded-md border-0 text-slate-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-800 p-3"
        />
        <button type="submit" className="bg-sky-800 hover:bg-sky-600 transition-colors duration-200 text-white py-4 px-8 rounded-lg font-bold text-lg mt-10">
          Submit
        </button>
      </form>
    </div>
  );
};
