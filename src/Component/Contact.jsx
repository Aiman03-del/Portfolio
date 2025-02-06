import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  AOS.init({
    duration: 1200,
    once: true,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message. Try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-16 px-6"
      data-aos="fade-up"
    >
      <div className="text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary">
          Contact Me
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto">
          I&apos;m always open to new opportunities and collaborations. Feel
          free to reach out!
        </p>

        <div
          className="max-w-lg mx-auto mt-12 p-6 shadow-lg rounded-md"
          data-aos="zoom-in"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-semibold text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="input input-bordered w-full mt-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="input input-bordered w-full mt-2"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="textarea textarea-bordered w-full mt-2"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="text-center mt-6">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>

            {status && <p className="text-center text-lg mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
