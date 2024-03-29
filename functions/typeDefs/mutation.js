const { gql } = require("apollo-server-lambda");

module.exports = gql`
  # User
  extend type Mutation {
    createUploadPreset: User
    adminCreateUser(
      firstName: String!
      middleName: String
      lastName: String!
      schoolIdNumber: String!
      email: String!
      password: String!
      isTeacher: Boolean!
    ): User
    createAdmin(firstName: String!, middleName: String, lastName: String!, email: String!, password: String!): User
  }

  extend type CreateUserInput { ## should not be used since admin will create the users
    firstName: String!
    middleName: String
    lastName: String!
    schoolIdNumber: String!
    email: String!
    password: String!
  }

  # Course
  extend type Mutation {
    createCourse(name: String!, subjCode: String!, yearAndSection: String!, startsAt: Date!, endsAt: Date!): Course
    joinCourse(courseCode: String!): Course
  }

  # Group
  extend type Mutation {
    createClassGroup(courseId: ID!, studentIds: [ID!]!): Group
    becomeLeader(groupId: ID!): Group
    transferLeadership(groupId: ID!, studentId: ID!): Group
    createStudyGroup(name: String!): Group
    joinStudyGroup(groupCode: String!): Group
  }

  # Activity / GroupActivity
  extend type Mutation {
    createActivity(title: String!, description: String!, dueAt: Date!, type: String!, courseId: ID!): Activity
    addAttachmentToActivity(id: ID!, attachment: String!): Activity
    createGroupActivity(title: String!, description: String!, dueAt: Date!, courseId: ID!): GroupActivity
    addAttachmentToGroupActivity(id: ID!, attachment: String!): GroupActivity
  }

  # Submission
  extend type Mutation {
    createSubmission(description: String!, activityId: ID!): Submission
    addAttachmentToSubmission(id: ID!, attachment: String!): Submission
    submitSubmission(id: ID!): Submission
  }

  # Post
  extend type Mutation {
    createPost(groupId: ID, courseId: ID, content: String!, category: String, tags: [String]): Post
    addAttachmentToPost(id: ID!, attachment: String!): Post
    destroyPost(id: ID!): Boolean
  }
`;
