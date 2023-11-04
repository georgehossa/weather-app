import { render } from '@testing-library/react-native';

import SignUp from './SignUp';

describe('<SignUp />', () => {
  it('should render', () => {
    const { getByText } = render(<SignUp />);

    expect(getByText('SignUp Screen')).toBeTruthy();
  });
});
