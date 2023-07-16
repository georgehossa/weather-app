import { render } from '@testing-library/react-native';

import Splash from './Splash';

describe('<Splash />', () => {
  it('should render', () => {
    const { getByText } = render(<Splash />);

    expect(getByText('Splash Screen')).toBeTruthy();
  });
});
