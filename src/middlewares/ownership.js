//Internal Lib Import
const { unauthorizedException } = require("../utils/error");
const {
  categoryService,
  invoiceService,
  bidService,
  ticketService,
} = require("../services");

const ownership =
  (model = "") =>
  async (req, _res, next) => {
    try {
      if (model === "Category") {
        const isOwner = await categoryService.checkOwnership({
          resourceId: req.params.id,
          adminId: req.user.adminId,
        });

        if (isOwner) {
          return next();
        }
        return next(unauthorizedException());
      }
      if (model === "Invoice") {
        const isOwner = await invoiceService.checkOwnership({
          resourceId: req.params.id,
          adminId: req.user.adminId,
        });

        if (isOwner) {
          return next();
        }
        return next(unauthorizedException());
      }
      if (model === "Bid") {
        const isOwner = await bidService.checkOwnership({
          resourceId: req.params.id,
          adminId: req.user.adminId,
        });

        if (isOwner) {
          return next();
        }
        return next(unauthorizedException());
      }
      if (model === "Ticket") {
        const isOwner = await ticketService.checkOwnership({
          resourceId: req.params.id,
          adminId: req.user.adminId,
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
