import { FC } from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  confirmText: string;
}

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  confirmText,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300 z-50">
      <div className="bg-neutral-900 p-8 rounded-lg shadow-2xl max-w-sm w-full transform transition-all duration-500 ease-in-out scale-95">
        <h2 className="text-xl font-semibold text-neutral-100 text-center mb-6">
          Confirmation
        </h2>
        <p className="text-sm text-neutral-400 text-center mb-8">
          {message}
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-full font-medium bg-neutral-700 text-neutral-300 hover:bg-neutral-600 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-full font-medium bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
