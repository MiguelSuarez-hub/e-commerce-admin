'use client';

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();
  return (
    <Modal isOpen={storeModal.isOpen} title="Create Store" description="Add a new store." onclose={storeModal.onClose}>
      Future create a form
    </Modal>
  );
};