// TODO: groupKey would make more sense to pass specifically to EdivateUsers function
//       since it is irrelevant to FrontlineUsers
export function getUserList(groupKey) {

	// TODO: Add data from Starks and create function to use timestamp for nonexistent
	//       locations
	const EdivateUsers = [
		{
			email: 'mchamberlain@frontlineed.com',
			employeeId: 'sample1',
			firstName: 'Martin',
			lastName: 'Chamberlain',
			location: '360-458996',
			ssoGroupKey: groupKey,
			password: 'test'
		},
		{
			email: 'h_flc_test@fakeemail.com',
			employeeId: 'FL84405',
			firstName: 'H',
			lastName: 'Test',
			location: '360-458996',
			ssoGroupKey: groupKey,
			password: 'test'
		},
  ];

	// TODO: Change this to return the master list that Starks is adding to Frontline
	const FrontlineUsers = [
		{
			login: 'mchamberlain',
			email: 'mchamberlain@frontlineed.com',
			password: 'l1fe=Hard'
		},
		{
			login: 'hstaging',
			email: 'h_flc_test@fakeemail.com',
			password: 'werT1120'
		}
	];

/*  const count = () => {
    return userList.length;
  } */

  return {
//    count,
    EdivateUsers,
		FrontlineUsers
  }
};
