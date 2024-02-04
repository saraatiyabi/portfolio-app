import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../HOC';
import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import EarthCanvas from './canvas/Earth';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [isLoading, setIsLoading] = useState(false);

  const notify = (msg, isSuccess) => {
    if (isSuccess) {
      toast.success(msg, {
        position: "bottom-left",
        theme: "dark"
      });
    }
    else {
      toast.error(msg, {
        position: "bottom-left",
        theme: "dark",
      })
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value)

    setForm({ ...form, [name]: value });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Sara",
        from_email: form.email,
        to_email: "Saraatiyabi18@gmail.com",
        message: form.message
      },
      import.meta.env.VITE_EMAIL_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false);
      notify("Thank you! I will get back to you as soon as possible!", true)

      setForm({
        name: "",
        email: "",
        message: ""
      })
    }, (error) => {
      setIsLoading(false);
      console.error(error);

      notify("Seems Like Something went wrong! please try again later.", false);
    })
  }

  return (
    <div className="w-full xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden pb-10 pt-5">
      <motion.div
        variants={slideIn("left", "twin", 0.2, 1)}
        className="bg-black-100 p-8 rounded-2xl flex-[0.75]"
      >
        <p className={`${styles.sectionSubText} uppercase`}>get in touch</p>
        <h2 className={`${styles.sectionHeadText} capitalize`}>Contact.</h2>
        <form className="flex flex-col mt-5" onSubmit={submitHandler} ref={formRef}>
          <label className="text-white font-medium mb-5">Your Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={changeHandler}
            placeholder="What is your good name?"
            className="border-0 outline-none rounded-lg bg-tertiary py-3 px-6 mb-5 placeholder:text-secondary"
          />
          <label className="text-white font-medium mb-5">Your Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={changeHandler}
            placeholder="What is your Email?"
            className="border-0 outline-none rounded-lg bg-tertiary py-3 mb-5 px-6 placeholder:text-secondary"
          />
          <label className="text-white font-medium mb-5">Your Message:</label>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={changeHandler}
            placeholder="What is your message?"
            className="border-0 outline-none rounded-lg mb-5 bg-tertiary py-3 px-6 placeholder:text-secondary"
          />

          <button type="submit" className="bg-tertiary rounded-lg text-white font-bold w-fit px-5 py-2 shadow-md shadow-primary">{isLoading ? "Sending" : "Send"}</button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "twin", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
      <ToastContainer />
    </div>
  )
}

export default SectionWrapper(Contact, "contact");