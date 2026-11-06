import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PartnershipModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("NGO partnership request submitted! (Demo)");
    onClose();
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg w-full max-w-lg p-6"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <h2 className="text-2xl font-display mb-4" style={{color: "var(--color-forest-ink)"}}>
              NGO Partnership Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="orgName" placeholder="Organization Name" required className="w-full border px-3 py-2" />
              <input type="text" name="contactPerson" placeholder="Contact Person" required className="w-full border px-3 py-2" />
              <input type="email" name="email" placeholder="Email" required className="w-full border px-3 py-2" />
              <input type="text" name="location" placeholder="Location" required className="w-full border px-3 py-2" />
              <textarea name="description" placeholder="Short description" required className="w-full border px-3 py-2" rows={3} />
              <div className="flex justify-end space-x-2 mt-4">
                <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                <button type="submit" className="px-4 py-2 bg-tomato-red text-white rounded">Submit</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
