import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal';
import { MdSettingsInputComponent } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState, ReactNode } from 'react';
import styles from './index.module.css';

Modal.setAppElement('#__next');

// Might add a footer in later.
interface ModalProps {
  title: string,
  children: ReactNode
}

const Index = ({ title = 'Modal Title', children }:ModalProps):JSX.Element => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    ReactTooltip.rebuild();
  }

  function afterOpenModal() {
    ReactTooltip.rebuild();
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button type="button" onClick={openModal} aria-label="Open Settings Modal"><MdSettingsInputComponent /></button>
      <ReactTooltip
        effect="solid"
        place="top"
        backgroundColor="rgba(0,0,0,0.6)"
      />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.header}>
          <h3 className={styles.modalHeading}>{title}</h3>
          <button type="button" className={styles.close} onClick={closeModal} aria-label="Close Settings Modal"><AiFillCloseCircle /></button>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.scrollContainer}>
            {children}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Index;
