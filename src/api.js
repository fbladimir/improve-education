export const getComments = async () => {
    return [
      {
        id: "1",
        body: "FIU is a great school! A lot of international students and great teachers.",
        username: "Jackie",
        userId: "1",
        parentId: null,
        createdAt: "2023-02-16T23:00:33.010+02:00",
      },
      {
        id: "2",
        body: "FIU is a good school. I reccomend getting a good advisor. Some advisors here aren't the best. ",
        username: "John",
        userId: "2",
        parentId: null,
        createdAt: "2022-12-16T23:00:33.010+02:00",
      },
      {
        id: "3",
        body: "Make sure you are contacting financial aid frequently, sometimes the delay is long. ",
        username: "Frank",
        userId: "2",
        parentId: "1",
        createdAt: "2022-08-16T23:00:33.010+02:00",
      },
      {
        id: "4",
        body: "I am from Ecuador and I would not have gone to any other school. I feel like I am at home here.",
        username: "Elizabeth",
        userId: "2",
        parentId: "2",
        createdAt: "2022-08-16T23:00:33.010+02:00",
      },
    ];
  };
  
  export const createComment = async (text, parentId = null) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      body: text,
      parentId,
      userId: "1",
      username: "John",
      createdAt: new Date().toISOString(),
    };
  };
  
  export const updateComment = async (text) => {
    return { text };
  };
  
  export const deleteComment = async () => {
    return {};
  };