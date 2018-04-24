module.exports = () => {
	const userList = [
    {
      name: 'Sample User',
      expectedResources: [
        {
           "Name":"Video Killed the Radio Star",
           "Type":"video",
           "Duration":"3:08"
        },
        {
           "Name":"I Want a New Drug",
           "Type":"video",
           "Duration":"3:32"
        }
      ]
    }
  ];

  const count = () => {
    return userList.length;
  }

  return {
    count,
    userList
  }
};
