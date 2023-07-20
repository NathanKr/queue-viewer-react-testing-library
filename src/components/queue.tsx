import { useState } from "react";
import styles from "../styles/queue.module.css";
import Task from "../types/e-task";
import GenericEnumBasedSelect from "./gen/generic-enum-based-select";

const Queue = () => {
  const [task, setTask] = useState(Task.task1);
  const [queue, setQueue] = useState<Task[]>([]);

  const enqueue = () => {
    const newQueue = [...queue];
    newQueue.push(task);
    setQueue(newQueue);
  };

  const dequeue = () => {
    if (queue.length === 0) return;

    const newQueue = [...queue];
    newQueue.shift();
    setQueue(newQueue);
  };

  return (
    <div className={styles.container}>
      <h1>Queue</h1>
      <div className={styles.button_container}>
        <button className={styles.button} onClick={enqueue}>
          Enqueue
        </button>
        <button className={styles.button} onClick={dequeue}>
          Dequeue
        </button>
      </div>
      <div className={styles.select_container}>
        <GenericEnumBasedSelect
          _enum={Task}
          changeHandler={(newOption: string) => setTask(newOption as Task)}
          defaultValue={task}
        />
      </div>
      <div>
        <div className={styles.queue_status}>Out Queue</div>
        <div className={styles.queue_item_container}>
          {queue.map((item, index) => (
            <div
              key={index}
              className={`${styles.queue_item} ${
                index === queue.length - 1 ? styles.inserted : ""
              }`}
            >
              {item} {/* Display the task directly */}
            </div>
          ))}
        </div>
        <div className={styles.queue_status}>In Queue</div>
      </div>
    </div>
  );
};

export default Queue;
