//Internal Lib Import
const { unauthorizedException } = require("../utils/error");
const { categoryService } = require("../services");

const ownership =
  (model = "") =>
  async (req, _res, next) => {
    try {
      if (model === "Category") {
        const isOwner = await categoryService.checkOwnership({
          resourceId: req.params.id,
          userId: req.user.id,
        });

        if (isOwner) {
          return next();
        }
        return next(unauthorizedException());
      }
    } catch (e) {
      next(e);
    }
  };

module.exports = ownership;
