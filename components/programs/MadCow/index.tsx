import { useContext } from 'react';
import DaySelector from '../../Calendar/DaySelector';
import Form from '../../Calendar/Form';
import TrainingDay from '../../madcow/TrainingDay';
import Scheme from '../../madcow/Scheme';
import WeightProgression from '../../madcow/WeightProgression';
import Config from '../../madcow/Settings';
import { MadCowContext } from '../../../contexts/madcow/Provider';

const Index = ():any => {
  const { state }:any = useContext(MadCowContext);
  const days = Object.keys(state.days);
  const daysSelected = days.filter((day) => state.days[day]);
  const workByMovement = state.movements.map((movement:any) => ({
    id: movement.id,
    label: movement.label,
    work: movement.work,
  }));
  return (
    <>
      <div className="flex--inline">
        <div />
        <Config workByMovement={workByMovement} />
      </div>
      <DaySelector />
      <Form />
      {daysSelected.length !== 0 && (
        <>
          <h4>Program Overview</h4>
          { daysSelected.map((d, i) => (
            <TrainingDay key={d} label={d}>
              <Scheme day={i} />
              <WeightProgression day={i} />
            </TrainingDay>
          ))}
        </>
      )}
    </>
  );
};

export default Index;
