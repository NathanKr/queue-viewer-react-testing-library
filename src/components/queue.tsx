import { useState } from "react";
import styles from "../styles/queue.module.css";
import Task from "../types/e-task";
import GenericEnumBasedSelect from "./gen/generic-enum-based-select";

const Queue = () => {
  const [task, setTask] = useState(Task.task1);
  const [queue, setQueue] = useState<Task[]>([]);

  const reversed = [...queue].reverse();
  const queueElem = reversed.map((it, i) => {
    const elem = (
      <div className={styles.queue_item} key={i}>
        {it}
      </div>
    );
    return elem;
  });

  const enqueue = () => {
    const newQueue = [...queue];
    newQueue.push(task);
    setQueue(newQueue);
  };

  const dequeue = () => {
    const newQueue = [...queue];
    newQueue.shift();
    setQueue(newQueue);
  };

  return (
    <div className={styles.container}>
      <h1>Queue</h1>
      <button onClick={enqueue}>Enqueue</button>
      <button onClick={dequeue}>Dequeue</button>
      <GenericEnumBasedSelect
        _enum={Task}
        changeHandler={(newOption: string) => setTask(newOption as Task)}
        defaultValue={task}
      />
      <div>
        <div>in queue</div>
        <div>{queueElem}</div>
        <div>out queue</div>
      </div>
    </div>
  );
};

export default Queue;
