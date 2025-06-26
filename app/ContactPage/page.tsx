"use client";
import React, { useState } from "react";
import {
    MailOutlined,
    PhoneOutlined,
    EnvironmentOutlined,
    LoadingOutlined,
    CheckCircleOutlined,
    SendOutlined
} from "@ant-design/icons";
import {
    GithubOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined,
    LinkedinOutlined
} from "@ant-design/icons";
import Header from "../components/ui/header";

// Define types for your form data
type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    subject: string;
    message: string;
};

type FormErrors = {
    firstName?: string;
    email?: string;
    message?: string;
};

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                // Reset form after 3 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                    setFormData({
                        firstName: '',
                        lastName: '',
                        email: '',
                        subject: '',
                        message: ''
                    });
                }, 3000);
            }, 1500);
        }
    };

    return (
        <section className="min-h-screen bg-gray-900 text-white px-6 py-16 flex items-center justify-center">
            <Header />
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Side - Contact Info */}
                <div data-aos="fade-right">
                    <h2 className="text-4xl font-bold mb-4">Aloqa qiling</h2>
                    <p className="mb-10 text-gray-300">
                        Shaklni to'ldiring va bizning jamoamiz sizga 12 soat ichida javob beradi.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 border border-gray-700 rounded-md px-4 py-3 hover:border-blue-500 transition-colors">
                            <PhoneOutlined className="text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Telefon</p>
                                <a href="tel:+998900677796" className="hover:text-blue-400 transition-colors">
                                    +998 90 067 7796
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border border-gray-700 rounded-md px-4 py-3 hover:border-blue-500 transition-colors">
                            <MailOutlined className="text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <a href="mailto:onlynur35@gmail.com" className="hover:text-blue-400 transition-colors">
                                    onlynur35@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 border border-gray-700 rounded-md px-4 py-3 hover:border-blue-500 transition-colors">
                            <EnvironmentOutlined className="text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Manzil</p>
                                <p>Toshkent, Yashnabod tumani</p>
                            </div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="mt-10">
                        <h3 className="text-lg font-medium mb-4">Ijtimoiy tarmoqlar</h3>
                        <div className="flex items-center gap-6 text-2xl">
                            <a
                                href="https://instagram.com/0nly.nur"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-pink-500 transition-colors"
                                title="Instagram"
                            >
                                <InstagramOutlined />
                            </a>
                            <a
                                href="https://t.me/nurmamatov_o71"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                title="Telegram"
                            >
                                <SendOutlined />
                            </a>
                            <a
                                href="https://github.com/NematulloNurmamatov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-gray-200 transition-colors"
                                title="GitHub"
                            >
                                <GithubOutlined />
                            </a>
                            <a
                                href="https://twitter.com/nematullo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-blue-400 transition-colors"
                                title="Twitter"
                            >
                                <TwitterOutlined />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div data-aos="zoom-out-down">
                    <form
                        onSubmit={handleSubmit}
                        className="bg-gray-800 p-7 rounded-xl shadow-lg space-y-5 border border-gray-700 pb-16"
                    >
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <CheckCircleOutlined className="text-green-500 text-5xl mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Xabaringiz yuborildi!</h3>
                                <p className="text-gray-400">Tez orada siz bilan bog'lanamiz</p>
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="Ismingiz"
                                            className={`border px-4 bg-gray-900 py-3 rounded-md w-full ${errors.firstName ? 'border-red-500' : 'border-gray-700'}`}
                                            value={formData.firstName}
                                            onChange={handleChange}
                                        />
                                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            name="lastName"
                                            placeholder="Familiyangiz"
                                            className="border px-4 py-3 bg-gray-900 rounded-md w-full border-gray-700"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email manzilingiz"
                                        className={`border px-4 py-3 bg-gray-900 rounded-md w-full ${errors.email ? 'border-red-500' : 'border-gray-700'}`}
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Mavzu"
                                    className="border px-4 py-3 bg-gray-900 rounded-md w-full border-gray-700"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />

                                <div>
                                    <textarea
                                        rows={5}
                                        name="message"
                                        placeholder="Xabaringiz"
                                        className={`border px-4 py-3 bg-gray-900 rounded-md w-full resize-none ${errors.message ? 'border-red-500' : 'border-gray-700'}`}
                                        value={formData.message}
                                        onChange={handleChange}
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-sky-800 text-white cursor-pointer px-5 py-2 absolute right-8 rounded-r-3xl rounded-l-md  hover:bg-blue-700 transition  flex items-end  justify-end  gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <LoadingOutlined className="animate-spin" />
                                            Yuborilmoqda...
                                        </>
                                    ) : (
                                        "Xabarni yuborish"
                                    )}
                                </button>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </section >
    );
}