'use client';

import { motion } from 'framer-motion';

const LegalLayout: React.FC<{ title: string; children: React.ReactNode; lastUpdated?: string }> = ({ title, children, lastUpdated }) => (
    <div className="pt-24 pb-12 px-4 max-w-4xl mx-auto">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <h1 className="text-4xl font-extrabold text-[#5D3A1A] dark:text-zinc-100 mb-6">{title}</h1>
            {lastUpdated && <p className="text-gray-500 dark:text-zinc-400 mb-8">Last Updated: {lastUpdated}</p>}
            <div className="prose dark:prose-invert max-w-none text-gray-700 dark:text-zinc-300">
                {children}
            </div>
        </motion.div>
    </div>
);

export default function DisclaimerPage() {
    return (
        <LegalLayout title="Disclaimer">
            <p>
                All information provided on this website is for informational purposes only. While every effort is made to ensure that the information presented is current and accurate, BanavatNest makes no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, reliability, or suitability of the information.
            </p>
            <p>
                This website may contain information and links provided by various internal or external sources. BanavatNest does not independently verify, monitor, or guarantee the authenticity of such information and does not endorse, control, or assume responsibility for the content of any external websites or linked resources. Any reliance placed on the information available through this website is strictly at the user&apos;s own risk.
            </p>
        </LegalLayout>
    );
}
