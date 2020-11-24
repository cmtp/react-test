import { render, screen } from '@testing-library/react';
import { shallow, configure, EnzymeAdapter } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App, { Todo } from './App';

configure({ adapter: new Adapter() });

describe("App", () => {
  describe('Todo', () => {
    it('Ejecutar completeTodo cuando hago click en Complete', () => {
      const completeTodo = jest.fn();
      // completeTodo.mock.calls === [[1], [2, 3]. [5], [], [1, 2, 3, 5]]
      const removeTodo = jest.fn();
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'lala',
      }

      const wrapper = shallow(<Todo completeTodo={completeTodo} removeTodo={removeTodo} index={index} todo={todo} />)
      wrapper.find('button').at(0).simulate('click');
      
      expect(completeTodo.mock.calls).toEqual([[5]]);
      expect(removeTodo.mock.calls).toEqual([]);
    });

    it('Ejecutar removeTodo cuando hago click en Remove', () => {
      const completeTodo = jest.fn();
      // completeTodo.mock.calls === [[1], [2, 3]. [5], [], [1, 2, 3, 5]]
      const removeTodo = jest.fn();
      const index = 5;
      const todo = {
        isCompleted: true,
        text: 'lala',
      }

      const wrapper = shallow(<Todo completeTodo={completeTodo} removeTodo={removeTodo} index={index} todo={todo} />)
      wrapper.find('button').at(1).simulate('click');
      
      expect(removeTodo.mock.calls).toEqual([[5]]);
      expect(completeTodo.mock.calls).toEqual([]);

    });
  })
})
