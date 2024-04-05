// exporting main or homepage to route files

module.exports.homepage = async (req, res) => {
  const locals = {
    title: "Notz",
  };
  res.render("index", locals);
};

module.exports.about = async (req, res) => {
  const locals = {
    title: "about",
  };
  res.render("about", locals);
};
