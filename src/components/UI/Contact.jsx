import React, { useState } from "react";

const UserIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.87 0-7 2.24-7 5v1h14v-1c0-2.76-3.13-5-7-5Z" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm15 2.24-6.38 5.43a1 1 0 0 1-1.24 0L5 8.24V17h14V8.24ZM6.55 8l5.45 4.64L17.45 8Z" />
    </svg>
);

const SendIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.55 11.11 4.48 3.3a1 1 0 0 0-1.39 1.18l2.03 6.45a1 1 0 0 0 .82.69l7.2 1.03-7.2 1.03a1 1 0 0 0-.82.69L3.09 20.82A1 1 0 0 0 4.48 22l17.07-7.81a1 1 0 0 0 0-1.81Z" />
    </svg>
);

const EnvelopeOutlineIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm15 2.24-6.38 5.43a1 1 0 0 1-1.24 0L5 8.24V17h14V8.24ZM6.55 8l5.45 4.64L17.45 8Z" />
    </svg>
);

const GithubIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42a3.18 3.18 0 0 0-1.34-1.76c-1.09-.75.08-.73.08-.73a2.53 2.53 0 0 1 1.85 1.25 2.57 2.57 0 0 0 3.51 1 2.56 2.56 0 0 1 .76-1.61c-2.67-.3-5.47-1.34-5.47-5.95A4.66 4.66 0 0 1 5.62 9a4.33 4.33 0 0 1 .12-3.2s1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23a4.33 4.33 0 0 1 .12 3.2 4.65 4.65 0 0 1 1.23 3.22c0 4.62-2.81 5.64-5.49 5.94a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.21.69.83.57A12 12 0 0 0 12 .5Z" />
    </svg>
);

const LinkedinIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.5 3A2.5 2.5 0 1 1 3 5.5 2.5 2.5 0 0 1 5.5 3ZM3.5 8.5h4V21h-4ZM10 8.5h3.83v1.7h.05a4.2 4.2 0 0 1 3.78-2.08c4.04 0 4.79 2.66 4.79 6.12V21h-4v-5.95c0-1.42 0-3.25-1.98-3.25s-2.29 1.55-2.29 3.15V21h-4Z" />
    </svg>
);

const Contact = () => {
    const [buttonText, setButtonText] = useState("Send Message");
    const [isSending, setIsSending] = useState(false);
    const [result, setResult] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setButtonText("Sending...");
        setResult("");

        const form = e.target;
        const formData = new FormData(form);
        formData.append("access_key", "2cb28917-0d20-4c59-a9fe-c2110d5a9eac");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully.");
                setButtonText("Sent");
                form.reset();
            } else {
                console.error("Web3Forms failed:", data);
                setResult(data.message || "Failed to send message.");
                setButtonText("Send Message");
            }
        } catch (error) {
            console.error("Web3Forms request failed:", error);
            setResult("Network error. Please try again.");
            setButtonText("Send Message");
        } finally {
            setIsSending(false);
            setTimeout(() => {
                setButtonText("Send Message");
            }, 3000);
        }
    };

    return (
        <section className="contact-container" id="contact">
            <div className="contact-copy">
                <div className="contact-copy__eyebrow">Get In Touch</div>
                <h2 className="contact-copy__title">
                    Let&apos;s Make
                    <br />
                    Pixels <span>Talk.</span>
                </h2>

                <div className="contact-links">
                    <a className="contact-link" href="mailto:adoledipesh@gmail.com">
                        <span className="contact-link__icon"><EnvelopeOutlineIcon /></span>
                        <span>adoledipesh@gmail.com</span>
                    </a>

                    <a
                        className="contact-link"
                        href="https://github.com/adoledivesh29/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="contact-link__icon"><GithubIcon /></span>
                        <span>github.com/adoledivesh29</span>
                    </a>

                    <a
                        className="contact-link"
                        href="https://www.linkedin.com/in/divesh-adole-314969204/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className="contact-link__icon"><LinkedinIcon /></span>
                        <span>linkedin.com/in/divesh-adole-314969204</span>
                    </a>
                </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <span className="contact-form__spark" aria-hidden="true" />

                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <div className="contact-field">
                        <input type="text" id="name" name="user_name" placeholder="Enter your name" required />
                        <span className="contact-field__icon" aria-hidden="true"><UserIcon /></span>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <div className="contact-field">
                        <input type="email" id="email" name="user_email" placeholder="Enter your email" required />
                        <span className="contact-field__icon" aria-hidden="true"><MailIcon /></span>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message..."
                        rows="6"
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSending}>
                    <span className="submit-btn__icon" aria-hidden="true"><SendIcon /></span>
                    <span>{buttonText}</span>
                </button>

                {result ? <p className="contact-result">{result}</p> : null}
            </form>
        </section>
    );
};

export default Contact;
