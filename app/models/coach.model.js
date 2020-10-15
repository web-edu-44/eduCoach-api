module.exports = mongoose => {
  const Coach = mongoose.model(
    "coach",
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
          field: { type: Array, "default": [] },
        },
        appointments: { type: Array, "default": [] }
      },
      { timestamps: true }
    )
  );

  return Coach;
};