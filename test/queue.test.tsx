import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect, beforeEach } from "vitest";
import Queue from "../src/components/queue";
import React from "react";

let btnEnqueue, btnDequeue;

beforeEach(() => {
  const queueComp = render(<Queue />);
  btnEnqueue = screen.getByText("Enqueue");
  btnDequeue = screen.getByText("Dequeue");
});

test("Queue text exist", () => {
  // --- this is using testing-library/react
  expect(screen.getByText("Queue")).not.toBeNull();
});

test("button Enqueue exist", () => {
  expect(btnEnqueue).not.toBeNull();
});

test("click enqueue --> wait for Task1", async () => {
  let task1Elements = screen.queryAllByText("Task1");
  expect(task1Elements.length).toBe(1); // one in options

  fireEvent.click(btnEnqueue);
  task1Elements = screen.queryAllByText("Task1");
  expect(task1Elements.length).toBe(2); // one in options and one in result
});

test("click dequeue after enqueue --> remove the item", () => {
  fireEvent.click(btnEnqueue);
  let task1Elements = screen.queryAllByText("Task1");
  expect(task1Elements.length).toBe(2); // one in options and one in result

  fireEvent.click(btnDequeue);
  task1Elements = screen.queryAllByText("Task1");
  expect(task1Elements.length).toBe(1); // one in options
});

test("get all task select options", () => {
  // Select the dropdown element
  const tasksSelect = screen.getByRole("combobox");

  // Open the dropdown
  fireEvent.click(tasksSelect);

  // Get the options within the dropdown
  const taskOptions = screen.getAllByRole("option");

  expect(taskOptions.length).toBe(3);
});

test('second task selected is ok',()=>{

})

//todo nath bring back
test.skip('click on Task2 --> appears in dom',()=>{
  let task2Elements = screen.queryAllByText("Task2");
  expect(task2Elements.length).toBe(1); // one in options 

  // Select the dropdown element
  const tasksSelect = screen.getByRole("combobox");

  // Open the dropdown
  fireEvent.click(tasksSelect);

  // Get the options within the dropdown
  const taskOptions = screen.getAllByRole("option");

  const task2Option = taskOptions[1];
  fireEvent.click(task2Option); // Task2 selected
  screen.getByText('Task2') ; // Task2 must appear

  fireEvent.click(btnEnqueue);

  task2Elements = screen.queryAllByText("Task2");
  expect(task2Elements.length).toBe(2); // one in options and one in result
})