import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = z.object({
  user_name: z.string().min(1, 'Name cannot be blank'),
  user_email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message cannot be blank'),
});

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      user_name: '',
      user_email: '',
      message: '',
    },
  });

  const form = useRef();

  const onSubmit = () => {
    emailjs
      .sendForm('service_mgil7h8', 'template_2139yfj', form.current, {
        publicKey: '1AjMdTJkplfZEpJxk',
      })
      .then(
        () => {
          toast.success('Sent message successfully!');
          reset();
        },
        (error) => {
          toast.error('Failed to send the message. Please try again.');
        },
      );
  };

  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col h-[93vh] lg:max-h-[70vh] justify-center lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="flex items-center justify-start lg:flex-1"
          >
            <div>
              <h4 className="mb-2 text-xl font-medium tracking-wide uppercase text-accent">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-6 lg:mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* form */}
          <motion.form
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            ref={form}
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start justify-between p-4 pb-4 border lg:flex-1 rounded-2xl gap-y-2"
          >
            <div className="flex flex-col w-full gap-4">
              {/* user name */}
              <input
                className="w-full py-2 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
                type="text"
                name="user_name"
                placeholder="Your name..."
                {...register('user_name')}
              ></input>
              {errors.user_name && (
                <p className="text-red-500" style={{ marginTop: '-16px' }}>
                  {errors.user_name.message}
                </p>
              )}

              {/* user email */}
              <input
                className="w-full py-2 transition-all bg-transparent border-b outline-none placeholder:text-white focus:border-accent"
                type="email"
                name="user_email"
                placeholder="Your email..."
                {...register('user_email')}
              ></input>
              {errors.user_email && (
                <p className="text-red-500" style={{ marginTop: '-16px' }}>
                  {errors.user_email.message}
                </p>
              )}

              {/* message */}
              <textarea
                className="w-full transition-all bg-transparent border-b outline-none resize-none pb-28 placeholder:text-white focus:border-accent"
                name="message"
                placeholder="Your message..."
                {...register('message')}
              ></textarea>
              {errors.message && (
                <p className="text-red-500" style={{ marginTop: '-16px' }}>
                  {errors.message.message}
                </p>
              )}
            </div>

            <div>
              {/* button send message */}
              <button type="submit" className="btn btn-lg">
                Send message
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* toast container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
