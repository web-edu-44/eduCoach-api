module.exports = mongoose => {
  const Student = mongoose.model(
    "student",
    mongoose.Schema(
      {
        type: String,
        username: String,
        password: String,
        info: {
          firstName: String,
          lastName: String,
          email: String,
          phone: String,
          image: String,
          interest: { type: Array, "default": [] },
        },
        appointments:  {
          type: Array, "default":[]
         }
      },
      { timestamps: true }
    )
  );

  return Student;
};