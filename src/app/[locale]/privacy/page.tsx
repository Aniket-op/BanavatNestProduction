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

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout title="Privacy Policy">
            <p>
                BanavatNest Private Limited (&ldquo;BanavatNest&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) respects the privacy of all users, collaborators, and stakeholders who interact with our platform. This Privacy Policy describes how information shared with us is handled.
            </p>

            <h3>1. Information We May Receive</h3>
            <p>
                We may receive information that you voluntarily provide, including (but not limited to) problem statements, ideas, documents, messages, contact details, and other materials submitted through our website, email, forms, or collaboration channels.
            </p>

            <h3>2. How We Use Information</h3>
            <p>
                Information shared with BanavatNest is used solely for research discussion, problem analysis, experimentation, collaborative innovation, feasibility assessment, pilot planning, training/learning activities, and related communication.
            </p>

            <h3>3. Sharing and Disclosure</h3>
            <ul>
                <li>We do not sell submitted information to third parties.</li>
                <li>We do not disclose or share submitted information externally without prior consent, except where required by law or explicitly agreed upon for collaboration.</li>
                <li>For collaborative engagements, we may share limited information with participating team members (e.g., students, scholars, faculty collaborators) on a need-to-know basis, subject to ethical and responsible practices.</li>
            </ul>

            <h3>4. Confidentiality and Sensitive Information</h3>
            <p>
                While BanavatNest takes reasonable care to respect confidentiality, submission through the platform does not automatically create a confidential relationship. Users are encouraged not to share highly sensitive, proprietary, or confidential information unless a formal written agreement (e.g., NDA) is in place.
            </p>

            <h3>5. User Responsibilities</h3>
            <p>
                Users are responsible for ensuring that content submitted does not violate confidentiality obligations, intellectual property rights, or third-party restrictions. Do not submit trade secrets, copyrighted material, or confidential information belonging to others without authorization.
            </p>

            <h3>6. Data Protection</h3>
            <p>
                We take reasonable administrative and technical precautions to protect submitted information. However, no method of transmission or storage is completely secure; therefore, absolute security cannot be guaranteed.
            </p>

            <h3>7. Contact</h3>
            <p>
                For queries regarding this Privacy Policy, please contact:<br />
                Email: <a href="mailto:info@banavatnest.com" className="text-[#84CC16]">info@banavatnest.com</a>
            </p>
        </LegalLayout>
    );
}
