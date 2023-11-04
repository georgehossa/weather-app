import { render } from '@testing-library/react-native';

import Login from './Login';

describe('<Login />', () => {
  it('should render', () => {
    const { getByText } = render(<Login />);

    expect(getByText('Login Screen')).toBeTruthy();
  });
});
