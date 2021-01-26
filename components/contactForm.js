import React from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_lqpvp52",
                "template_woolig4",
                e.target,
                "user_KC8f6yBEjdfjNdOcne8Sy",
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Your message was sent succesfully!");
                },
                (error) => {
                    console.log(error.text);
                    alert(error.text);
                },
            );
        e.target.reset();
    }

    return (
        <div className="form-wrapper">
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="name" />
                <label>Your email</label>
                <input type="email" name="email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Message</label>
                <textarea name="message" />
                <input id="submit-btn" type="submit" value="Send" />
            </form>
            <style jsx>{`
                .form-wrapper {
                    margin: 0% 35%;
                    border-radius: 5px;
                    padding: 2px;
                    border: 1px solid #000;
                    padding: 15px;
                    border-radius: 5px;
                }
                .contact-form {
                    display: block;
                    margin: 0px 20px;
                }
                .contact-form label {
                    margin: 5px 0px;
                    color: #000;
                    font-weight: 700;
                    font-size: 24px;
                    display: block;
                }
                .contact-form input,
                textarea {
                    margin: 15px 0px 15px 0px;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    display: block;
                    width: 100%;
                }
                #submit-btn {
                    justify-content: center;
                    align-self: center;
                    border: none;
                    border-radius: 15px;
                    cursor: pointer;
                    color: #fff;
                    background-color: #494949;
                    padding: 10px 25px;
                    width: 100%;
                    margin-top: 35px;
                }
                @media (max-width: 1024px) {
                    .form-wrapper {
                        margin: 0% 25%;
                    }
                    .contact-form {
                        display: block;
                        margin: 0px 20px;
                    }
                    .contact-form label {
                        margin: 5px 0px;
                        color: #000;
                        font-weight: 700;
                        font-size: 16px;
                        display: block;
                    }
                    .contact-form input,
                    textarea {
                        margin: 15px 0px 15px 0px;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        display: block;
                        width: 100%;
                    }
                    #submit-btn {
                        justify-content: center;
                        align-self: center;
                        border: none;
                        border-radius: 15px;
                        cursor: pointer;
                        color: #fff;
                        background-color: #494949;
                        padding: 10px 25px;
                        width: 100%;
                        margin-top: 35px;
                    }
                }
                @media (max-width: 425px) {
                    .form-wrapper {
                        margin: 0% 10%;
                    }
                    .contact-form {
                        display: block;
                        margin: 0px 20px;
                    }
                    .contact-form label {
                        margin: 5px 0px;
                        color: #000;
                        font-weight: 700;
                        font-size: 16px;
                        display: block;
                    }
                    .contact-form input,
                    textarea {
                        margin: 15px 0px 15px 0px;
                        border-top: none;
                        border-left: none;
                        border-right: none;
                        display: block;
                        width: 100%;
                    }
                    #submit-btn {
                        justify-content: center;
                        align-self: center;
                        border: none;
                        border-radius: 15px;
                        cursor: pointer;
                        color: #fff;
                        background-color: #494949;
                        padding: 10px 25px;
                        width: 100%;
                        margin-top: 25px;
                    }
                }
            `}</style>
        </div>
    );
}
