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
            field: [

            ],
          appointments: [

          ]
          }
        },
        { timestamps: true }
      )
    );
  
    return coach;
  };