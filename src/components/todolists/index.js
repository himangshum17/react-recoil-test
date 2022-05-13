import { useRecoilValue } from 'recoil';
import { todoListState } from '../../state';
import Createtodo from './createtodo';
import Todo from './todo';

const Todolists = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <Createtodo />
      <ul className='space-y-2 mt-6'>
        {todoList.map(({ id, text }) => (
          <Todo key={id} item={text} />
        ))}
      </ul>
    </>
  );
};
export default Todolists;
