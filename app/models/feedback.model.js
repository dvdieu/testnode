module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        content: String,
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const FeedBack = mongoose.model("feedback", schema);
    return FeedBack;
  };