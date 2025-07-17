// src/components/Intro.tsx

export default function Intro() {
    return (
        <section
            id="intro"
            className="min-h-screen flex flex-col justify-center items-start gap-6 px-6 max-w-3xl mx-auto"
        >
            <h1 className="text-5xl md:text-6xl font-bold text-white">
                Benson Lin
            </h1>

            <h2 className="text-2xl text-purple-400 font-semibold">
                Full-Stack Dev @ WPI
            </h2>

            <p className="text-gray-300 text-lg max-w-xl">
                Building real-time web apps with React, Node, and AWS — and learning how to ship without losing sleep.
            </p>

            <div className="flex gap-4 mt-4">
                <a
                    href="https://github.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
                >
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-purple-600 transition"
                >
                    LinkedIn
                </a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
                >
                    Resume
                </a>
            </div>
        </section>
    );
}
