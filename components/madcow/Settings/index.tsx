import ReactTooltip from 'react-tooltip';
import Modal from 'react-modal';
import { useContext, useState } from 'react';
import { MdSettingsInputComponent } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import styles from './index.module.css';
import generateMadcowProgression from '../../../lib/madcow/generateMadcowProgression';
import { MadCowContext } from '../../../contexts/madcow/Provider';

Modal.setAppElement('#__next');

type SettingsWithWrapper = {
  workByMovement: {
    id: number,
    label: string,
    work: number
  }[],
};

const Index = ({
  workByMovement,
}:SettingsWithWrapper):JSX.Element => {
  const { state, dispatch }:any = useContext(MadCowContext);
  let { duration, interval, plate } = state.settings;
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

  function handleSettings() {
    // dispatch(updateConfigSettings({ duration, interval, plate }));
    workByMovement.map((movement) => {
      const { id, label, work } = movement;
      const progression = generateMadcowProgression(duration, interval, plate, work);
      // return dispatch(updateProgressions({ id, label, progression }));
    });
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
          <h3 className={styles.modalHeading}>Settings</h3>
          <button type="button" className={styles.close} onClick={closeModal} aria-label="Close Settings Modal"><AiFillCloseCircle /></button>
        </div>
        <div className={styles.modalBody}>
          <div>
            <label htmlFor="duration">
              <strong className={styles.label}>Duration</strong>
              <input
                type="number"
                name="duration"
                min="1"
                max="18"
                step="1"
                defaultValue={duration}
                data-tip="Number of programmed weeks."
                onChange={(e) => {
                  duration = parseInt(e.target.value, 10);
                  handleSettings();
                }}
              />
            </label>
          </div>
          <div>
            <label htmlFor="plate">
              <strong className={styles.label}>Plate</strong>
              <select
                data-tip="Smallest weight available in the gym."
                defaultValue={plate}
                // eslint-disable-next-line no-return-assign
                onChange={(e) => {
                  plate = parseFloat(e.target.value);
                  handleSettings();
                }}
              >
                <option>10</option>
                <option>5</option>
                <option>2.5</option>
                <option>1.25</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="interval">
              <strong className={styles.label}>Interval</strong>
              <input
                type="number"
                name="interval"
                step="0.25"
                min="12"
                max="18"
                defaultValue={interval}
                data-tip="Percentage of difficulty week to week. Best not to change."
                onChange={(e) => {
                  interval = parseFloat(e.target.value);
                  handleSettings();
                }}
              />
            </label>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Index;
