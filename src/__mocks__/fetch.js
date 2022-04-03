const mockResponse = {
  data: {
    results: [
      {
        name: "Luke Skywalker",
        birth_year: "19BBY",
        eye_color: "blue",
        skin_color: "fair",
        gender: "mail",
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
