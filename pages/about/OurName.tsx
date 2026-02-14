import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import ImageCarousel from '../../components/ImageCarousel';

// Import images for carousel
import img1 from '../../assets/homepage/Ai.png';
import img2 from '../../assets/homepage/agriculture.png';
import img3 from '../../assets/homepage/cyberSecure.png';
import img4 from '../../assets/homepage/smart.png';

const images = [img1, img2, img3, img4];

const OurName = () => {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] transition-colors pb-24 grid-bg">
            <header className="pt-24 pb-20 border-b border-gray-100 dark:border-zinc-800 mb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <h1 className="text-5xl md:text-7xl font-black text-zinc-900 dark:text-zinc-100 mb-8 tracking-tighter leading-tight">
                            Our <span className="text-[#84CC16]">Name</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-500 dark:text-zinc-400 font-medium leading-relaxed">
                            Symbolizing the philosophy of creation and nurturing innovation.
                        </p>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#5D3A1A] dark:bg-zinc-900 text-white p-8 md:p-12 rounded-[3rem] relative overflow-hidden shadow-2xl border dark:border-zinc-800 order-2 lg:order-1"
                    >
                        <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-black mb-12 flex items-center">
                                <span className="w-12 h-1 bg-[#84CC16] mr-4 rounded-full"></span>
                                The Meaning
                            </h2>
                            <div className="space-y-12 text-gray-200 dark:text-zinc-300">
                                <div>
                                    <strong className="text-[#84CC16] text-3xl font-black block mb-4">Banavat</strong>
                                    <p className="text-lg leading-relaxed opacity-90">
                                        Drawn from Punjabi usage, signifies making, crafting, building, and creating. It conveys the spirit of active construction, thoughtful design, and purposeful formation.
                                    </p>
                                </div>

                                <div className="w-full h-px bg-white/10"></div>

                                <div>
                                    <strong className="text-[#84CC16] text-3xl font-black block mb-4">Nest</strong>
                                    <p className="text-lg leading-relaxed opacity-90">
                                        Symbolizes a safe and nurturing space where ideas are developed, protected, and allowed to grow before taking flight.
                                    </p>
                                </div>

                                <div className="bg-white/10 p-8 rounded-3xl mt-8 backdrop-blur-sm border border-white/10">
                                    <p className="text-lg font-medium italic text-white leading-relaxed">
                                        "Together, BanavatNest is founded on the principles of creation and nurturing, representing a research-led innovation ecosystem in which curiosity-driven ideas are shaped through systematic investigation."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="order-1 lg:order-2 sticky top-32"
                    >
                        <ImageCarousel images={images} />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OurName;
