import Typography from "./Typography.tsx";
import React, { useState, useRef } from 'react';

function NeonButton() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);
    const btnRef = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = btnRef.current?.getBoundingClientRect();
        if (!rect) return;
        setPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <button
            ref={btnRef}
            type="submit"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            className="group relative px-6 py-3 border-none ring-1 ring-gray-300 hover:ring-dark-red focus:ring-dark-red text-gray-300 hover:text-dark-red focus:text-dark-red font-semibold uppercase tracking-wider rounded-md overflow-hidden transition-colors duration-300"
        >
            {hovered && (
                <span
                    className="pointer-events-none absolute w-8 h-8 rounded-full bg-red-600 blur-lg opacity-80 scale-100"
                    style={{
                        top: pos.y - 16,
                        left: pos.x - 16,
                    }}
                />
            )}
            <span className="relative z-10">Submit</span>
        </button>
    );
}

type ContactUsFormProps = {
    setFocused: (value: boolean) => void;
}

const maxMessageLength = 3500;

const ContactUsFormBody = ({setFocused}: ContactUsFormProps) => {
    const [len1, setLen1] = useState(0);
    const [len2, setLen2] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: any) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const body = { sender: formData.get('sender'), message: formData.get('message') };

        fetch('https://service.peppshabender.de/post', {
            method: form.method,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(body)
        }).then(() => setSubmitted(true))
    }

    return (
        <form method="post" onSubmit={handleSubmit} className="py-2 px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col space-y-3 sm:space-y-4" onClick={e => e.stopPropagation()}>
            <div className="relative">
                <input
                    required
                    name= "sender"
                    type="text"
                    placeholder="Ingame Name/Discord Tag"
                    className="w-full p-2 sm:p-3 rounded text-sm sm:text-base focus:outline-none ring-1 ring-gray-300 focus:ring-dark-red"
                    minLength={7}
                    maxLength={50}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={e => setLen1(e.target.value.length)}
                />
                <Typography variant="body-small" className="absolute right-1 bottom-1">
                    {len1}/50
                </Typography>
            </div>
            <div className="relative">
                <textarea
                    required
                    name= "message"
                    placeholder="Your super secret (and hopefully encrypted) message..."
                    className="w-full p-2 h-50 sm:p-3 rounded text-sm sm:text-base focus:outline-none ring-1 ring-gray-300 focus:ring-dark-red"
                    minLength={20}
                    maxLength={maxMessageLength - len1}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    onChange={e => setLen2(e.target.value.length)}
                />
                <Typography variant="body-small" className="absolute right-1 bottom-1">
                    {len1 + len2}/{maxMessageLength}
                </Typography>
            </div>
            {!submitted && <NeonButton/>}
        </form>
    )
}

const ContactUsForm = () => {
    const [focused, setFocused] = useState(false);
    const [expanded, setExpandedRaw] = useState(false);

    function setExpanded(value: boolean) {
        if(!focused) setExpandedRaw(value);
    }

    const handleMouseEnter = () => setExpanded(true);
    const handleMouseLeave = () => setExpanded(false);
    const handleClick = () => {
        if (!expanded) setExpanded(true);
    };

    return (
        <div className="flex items-center justify-center h-screen bg-zinc-900 p-4">
            <div
                className={`group relative transition-all duration-400 ease-in-out ring-2 ring-dark-red shadow-[0px_0px_11px_0px_red] rounded-lg overflow-hidden
                    ${expanded
                    ? 'w-full max-w-100 sm:max-w-200 h-auto'
                    : 'min-w-16 sm:min-w-20 md:min-w-24 h-auto'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <div className={`transition-all duration-300 ease-in-out p-2 sm:p-3 md:p-4
                    ${expanded ? 'text-left pb-2 sm:pb-3 md:pb-4' : 'flex items-center justify-center'}`}>
                    <Typography
                        variant="h6"
                        className="select-none text-xs sm:text-sm md:text-lg transition-all duration-300 ease-in-out"
                    >
                        Contact Us
                    </Typography>
                </div>

                <div className={`transition-all duration-400 ease-in-out overflow-hidden
                    ${expanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ContactUsFormBody setFocused={setFocused} />
                </div>
            </div>
        </div>
    );
}

export default ContactUsForm;