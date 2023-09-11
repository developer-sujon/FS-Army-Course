//Internal Lib Import
const { categoryService } = require("../../../../services");

const updateProperties = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.user;

  try {
    const category = await categoryService.updateProperties(
      id,
      req.body,
      userId
    );

    const response = {
      code: 200,
      message: "category updated successfully",
      data: category,
      links: {
        self: `/categories/${category.id}`,
      },
    };

    res.json(response);
  } catch (e) {
    next(e);
  }
};

module.exports = updateProperties;
