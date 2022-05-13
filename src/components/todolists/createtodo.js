import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../state';
import { v4 as uuidv4 } from 'uuid';

const Createtodo = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = e => {
    e.preventDefault();
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: uuidv4(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  return (
    <div className='space-x-4'>
      <form onSubmit={addItem}>
        <input
          type='text'
          className='border border-gray-300 h-14 w-full p-4 max-w-lg bg-slate-200 rounded-lg'
          value={inputValue}
          onChange={onChange}
        />
        <button
          type='submit'
          className='bg-purple-700 text-purple-200 py-4 px-8 shadow-xl shadow-purple-300 rounded-lg active:shadow-none active:scale-[.98]'>
          Add Todo
        </button>
      </form>
    </div>
  );
};
export default Createtodo;
