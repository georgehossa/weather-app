import { render } from '@testing-library/react-native';

import Welcome from './Welcome';

describe('<Welcome />', () => {
  it('should render', () => {
    const { getByText } = render(<Welcome />);

    expect(getByText('Welcome Screen')).toBeTruthy();
  });
});
