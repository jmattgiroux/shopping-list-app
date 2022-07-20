// const createUser = require("../src/database/users/users-resolvers");

// describe("create a new user function", () => {
//     test("it should create a new user ", () => {
//         const input = [
//             { id: 1, url: "https://www.url1.dev" },
//             { id: 2, url: "https://www.url2.dev" },
//             { id: 3, url: "https://www.link3.dev" }
//         ];

//         const output = [{ id: 3, url: "https://www.link3.dev" }];

//         expect(filterByTerm(input, "link")).toEqual(output);

//         expect(filterByTerm(input, "LINK")).toEqual(output);
//     });
// });

// const { gql } = require('apollo-server');
// const server = require("../src/app");

// it("runs a health against our graphql schema", async () => {
//     let result = await server.executeOperation({
//       query: gql`
//         query {
//           test(bool: false)
//         }
//       `,
//     });
//     expect(result).toBeTruthy();
//     expect(result).toHaveProperty("data");
//     expect(result.errors).toBeFalsy();
//     expect(result.data?.test).toEqual(false);
  
//     result = await server.executeOperation({
//       query: gql`
//         query {
//           test(bool: invalidArgument)
//         }
//       `,
//     });
//     expect(result).toBeTruthy();
//     expect(result.errors).toBeTruthy();
//   });

//   it("should validate user info correctly", () => {
//     const result = server.executeOperation({
//       query: gql`
//         mutation {
//           login(
//             credentials: {
//               email: "bob@gmail.com"
//               username: "helloworld"
//               password: ""
//             }
//           )
//         }
//       `,
//     });
//     expect(result).toBeTruthy();
//     expect(result.errors).toBeTruthy();
//   });