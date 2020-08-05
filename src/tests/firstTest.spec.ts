import User from '../models/User';

test('ir should be ok', () => {
  const user = new User();

  user.name = 'Davidson';

  expect(user.name).toEqual('Davidson');
});
