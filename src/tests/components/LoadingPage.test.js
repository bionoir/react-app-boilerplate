import React from 'react';
import { shallow } from 'enzyme/build';
import LoadingPage from '../../components/LoadingPage';

test('should render the LoadingPage component', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
});