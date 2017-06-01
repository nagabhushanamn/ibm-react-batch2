import TopicList from '../src/components/TopicList';
import React from 'react';
// import { mount, shallow } from 'enzyme';


// test('TopicList component renders the panel with title All Topics , shud return Topic onClick', () => {

//   const handleSelectTopic = jest.fn(); // mock

//   const wrapper = mount(
//     <TopicList onTopicSelect={handleSelectTopic} data={["React", "Redux"]} />
//   );

//   const titleDiv = wrapper.find('.panel-heading');
//   expect(titleDiv.text()).toBe('All Topics');

//   const topicEle = wrapper.find('.list-group-item').first();
//   topicEle.simulate('click');
//   expect(handleSelectTopic).toBeCalledWith('React')

// });




// // snapshot Testing  ( unique )


import renderer from 'react-test-renderer';

describe('TopicList component renders the topics correctly', () => {
  
  it('renders correctly', () => {

   // snapshop 
    const rendered = renderer.create(
      <TopicList  />
    );

    expect(rendered.toJSON()).toMatchSnapshot();

  });
});